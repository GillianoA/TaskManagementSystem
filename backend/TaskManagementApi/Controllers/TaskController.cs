
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

/// <summary>
/// Controller for handling task-related operations
/// </summary>
[ApiController]
[Route("api/[controller]")]
public class TaskController : ControllerBase{
    private readonly TaskManagementContext _context;

    /// <summary>
    /// Initializes a new instance of the TaskController
    /// </summary>
    /// <param name="context">The database context</param>
    public TaskController(TaskManagementContext context){
        _context = context;
    }

    /// <summary>
    /// Get all tasks
    /// </summary>
    /// <returns>
    /// 200 OK with list of tasks if successful
    /// </returns>
    /// <response code="200">Returns list of tasks</response>
    //Get all tasks endpoint
    [Authorize]
    [HttpGet]
    public async Task<IActionResult> GetAllTasks(){
        var taskItems = await _context.TaskItems.ToListAsync();
        return Ok(taskItems);
    }

    /// <summary>
    /// Get task by id
    /// </summary>
    /// <param name="id"></param>
    /// <returns>
    /// 200 OK with task if found, 404 Not Found if task not found
    /// </returns>
    /// <response code="200">Returns the task if found</response>
    /// <response code="404">If task not found</response>
    //Get task by id
    [Authorize]
    [HttpGet("{id}")]
    public async Task<IActionResult> GetTaskById(int id){
        var task = await _context.TaskItems.FindAsync(id);
        if(task == null){
            return NotFound("Task not found.");
        }
        return Ok(task);
    }

    /// <summary>
    /// Create a new task
    /// </summary>
    /// <param name="dto"></param>
    /// <returns>
    /// 201 Created if task is created successfully, 400 Bad Request if task data is invalid
    /// </returns>
    /// <response code="201">Returns the newly created task</response>
    /// <response code="400">If the task data is invalid</response>
    //Create a new task
    [Authorize]
    [HttpPost]
    public async Task<IActionResult> CreateTask([FromBody] TaskDTO dto){

        var newTask = new TaskItem{
            Title = dto.Title,
            Description = dto.Description,
            DueDate = dto.DueDate,
            Status = dto.Status,
            Priority = dto.Priority,
            UserId = dto.UserId,
            CategoryId = dto.CategoryId
        };

        _context.TaskItems.Add(newTask);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetTaskById), new { id = newTask.Id }, newTask);
    }

    /// <summary>
    /// Update a task
    /// </summary>
    /// <param name="id"></param>
    /// <param name="updatedTask"></param>
    /// <returns>
    /// 204 No Content if task is updated successfully, 400 Bad Request if task data is invalid, 404 Not Found if task not found
    /// </returns>
    /// <response code="204">If task is updated successfully</response>
    /// <response code="400">If the task data is invalid</response>
    /// <response code="404">If task not found</response>
    //Update a task
    [Authorize]
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateTask(int id, [FromBody] TaskDTO updatedTask){
        if(_context.TaskItems.Find(id) == null){
            return NotFound("Task not found.");
        }
        var task = _context.TaskItems.Find(id);

        task.Title = updatedTask.Title;
        task.Description = updatedTask.Description;
        task.DueDate = updatedTask.DueDate;
        task.CreatedAt = updatedTask.CreatedAt;
        task.Status = updatedTask.Status;
        task.Priority = updatedTask.Priority;
        task.UserId = updatedTask.UserId;
        task.CategoryId = updatedTask.CategoryId;
        
        _context.TaskItems.Update(task);
        await _context.SaveChangesAsync();
        return NoContent();
    }

    /// <summary>
    /// Delete a task
    /// </summary>
    /// <param name="id"></param>
    /// <returns>
    /// 204 No Content if task is deleted successfully, 404 Not Found if task not found
    /// </returns>
    /// <response code="204">If task is deleted successfully</response>
    /// <response code="404">If task not found</response>
    //Delete a task
    [Authorize]
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteTask(int id){
        var task = await _context.TaskItems.FindAsync(id);
        if(task == null){
            return NotFound("Task not found.");
        }
        _context.TaskItems.Remove(task);
        await _context.SaveChangesAsync();
        return NoContent();
    }
}