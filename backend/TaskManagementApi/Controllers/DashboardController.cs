using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;

[ApiController]
[Route("api/[controller]")]
public class DashboardController : ControllerBase{
    private readonly TaskManagementContext _context;

    public DashboardController(TaskManagementContext context){
        _context = context;
    }

    //Get dashboard data
    [Authorize] 
    [HttpGet("stats")]
    public async Task<IActionResult> GetDashboardData(){

        int userId = 1; //Replace with the actual user ID from the token or session

        // get user task data 
        var totalTasks = await _context.TaskItems.CountAsync(t => t.UserId == userId);
        var completedTasks = await _context.TaskItems.CountAsync(t => t.Status == "Completed" && t.UserId == userId);
        var pendingTasks = totalTasks - completedTasks;
        var overdueTasks = await _context.TaskItems.CountAsync(t => t.DueDate < DateTime.Now && t.Status != "Completed" && t.UserId == userId);

        return Ok(new {
            totalTasks, completedTasks, pendingTasks, overdueTasks
        });
    }

    //Get recent tasks
    [Authorize] 
    [HttpGet("recent-activity")]
    public async Task<IActionResult> GetRecentTasks(){
        int userId = 1; //Replace with the actual user ID from the token or session

        var recentTasks = await _context.TaskItems
            .Where(t => t.UserId == userId)
            .OrderByDescending(t => t.CreatedAt)
            .Take(5)
            .Select(t => new {
                t.Id,
                t.Title,
                t.Status,
                t.CreatedAt
            })
            .ToListAsync();

        return Ok(recentTasks);
    }

    //Get upcoming tasks
    [Authorize] 
    [HttpGet("upcoming-tasks")]
    public async Task<IActionResult> GetUpcomingTasks(){
        int userId = 1; //Replace with the actual user ID from the token or session

        var upcomingTasks = await _context.TaskItems
            .Where(t => t.UserId == userId && t.DueDate > DateTime.Now)
            .OrderBy(t => t.DueDate)
            .Take(3)
            .Select(t => new {
                t.Id,
                t.Title,
                t.DueDate,
                IsOverdue = t.DueDate < DateTime.Now
            })
            .ToListAsync();

        return Ok(upcomingTasks);
    }

    //get priority distributuion
    [Authorize]
    [HttpGet("priority-distribution")]
    public async Task<IActionResult> GetPriorityDistribution(){
        int userId = 1; //Replace with the actual user ID from the token or session

        var priorityDistribution = await _context.TaskItems
            .Where(t => t.UserId == userId)
            .GroupBy(t => t.Priority == 1 ? "Low" : t.Priority == 2 ? "Medium" : "High")
            .Select(g => new {
                Priority = g.Key,
                Count = g.Count()
            })
            .ToListAsync();

        return Ok(priorityDistribution);
    }
}
