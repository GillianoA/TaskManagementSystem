using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BCrypt.Net;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase{
    private readonly TaskManagementContext _context;
    private readonly JwtService _jwtService;

    public AuthController(TaskManagementContext context, JwtService jwtService){
        _context = context;
        _jwtService = jwtService;
    }

    //Endpoint to register a new user
    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] RegisterModel model){
        if(await _context.Users.AnyAsync(u => u.Email == model.Email)){
            return BadRequest("Email already exists");
        }

        var user = new User{
            Username = model.Username,
            Email = model.Email,
            PasswordHash = BCrypt.Net.BCrypt.HashPassword(model.Password)
        };

        _context.Users.Add(user);
        await _context.SaveChangesAsync();

        return Ok("User registered successfully");
    }

    //Endpoint for user login
    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginModel model){
        var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == model.Email);
        if(user == null || !BCrypt.Net.BCrypt.Verify(model.Password, user.PasswordHash)){
            return Unauthorized("Invalid credentials.");
        }

        var token = _jwtService.GenerateToken(user);
        return Ok(new { Token = token });
    }
}
