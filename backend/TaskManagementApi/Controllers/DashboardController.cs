using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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

        int userId = 4; //Replace with the actual user ID from the token or session

        // get user task data 
        var totalTasks = await _context.TaskItems.CountAsync(t => t.UserId == userId);
        var completedTasks = await _context.TaskItems.CountAsync(t => t.Status == "Completed" && t.UserId == userId);
        var pendingTasks = totalTasks - completedTasks;
        var overdueTasks = await _context.TaskItems.CountAsync(t => t.DueDate < DateTime.Now && t.Status != "Completed" && t.UserId == userId);

        return Ok(new {
            totalTasks, completedTasks, pendingTasks, overdueTasks
        });
    }
}
