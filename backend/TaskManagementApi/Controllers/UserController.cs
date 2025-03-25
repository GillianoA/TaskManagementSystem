using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]
public class UserController : ControllerBase{
    private readonly TaskManagementContext _context;
    public UserController(TaskManagementContext context){
        _context = context;
    }

    //get user by ID
    [Authorize]
    [HttpGet("{id}")]
    public async Task<IActionResult> GetUserById(int id){
        var user = await _context.Users.FindAsync(id);
        if(user == null){
            return NotFound("User not found.");
        }
        return Ok(user);
    }

    //Update user by ID
    [Authorize]
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateUser(int id, [FromBody] User user){
        if(_context.Users.Find(id) == null){
            return NotFound("User not found.");
        }

        _context.Users.Update(user);
        await _context.SaveChangesAsync();
        return NoContent();
    }

    //Get current username
    [Authorize]
    [HttpGet("me")]
    public async Task<IActionResult> GetCurrentUser(){
    var userId = 4; //Replace with the actual user ID from the token or session

        var username = await _context.Users
                            .Where(u => u.Id == userId)
                            .Select(u => u.Username)
                            .FirstOrDefaultAsync();; //Replace with the actual user ID from the token or session

        return Ok(new { Username = username });
    }
}