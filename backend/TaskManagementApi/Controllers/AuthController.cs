using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BCrypt.Net;
using System.Collections.Generic;

/// <summary>
/// Controller for handling authentication-related operations
/// </summary>
[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase{
    private readonly TaskManagementContext _context;
    private readonly JwtService _jwtService;

    /// <summary>
    /// Initializes a new instance of the AuthController
    /// </summary>
    /// <param name="context">The database context</param>
    /// <param name="jwtService">The JWT service for token generation</param>
    public AuthController(TaskManagementContext context, JwtService jwtService){
        _context = context;
        _jwtService = jwtService;
    }

    /// <summary>
    /// Register a new user
    /// </summary>
    /// <param name="model">The registration details</param>
    /// <returns>
    /// 200 OK with success message if registration is successful
    /// 400 Bad Request if email already exists
    /// </returns>
    /// <response code="200">Returns success message when user is registered</response>
    /// <response code="400">If email already exists in the system</response>
    //Endpoint to register a new user
    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] RegisterModel model){
        if(await _context.Users.AnyAsync(u => u.Email == model.Email)){
            return BadRequest("Email already exists");
        }

        var user = new User{
            Username = model.Username,
            Email = model.Email,
            PasswordHash = BCrypt.Net.BCrypt.HashPassword(model.Password),
            TaskItems = new List<TaskItem>()
        };

        _context.Users.Add(user);
        await _context.SaveChangesAsync();

        return Ok("User registered successfully");
    }
    
    /// <summary>
    /// User login
    /// </summary>
    /// <param name="model">The login details</param>
    /// <returns>
    /// 200 OK with JWT token if login is successful
    /// 401 Unauthorized if invalid credentials
    /// </returns>
    //Endpoint for user login
    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginModel model){
        var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == model.Email);
        
        if (user == null)
        {
            Console.WriteLine($"Login failed: User with email {model.Email} not found");
            return Unauthorized("Invalid credentials");
        }

        bool passwordValid = BCrypt.Net.BCrypt.Verify(model.Password, user.PasswordHash);
        
        if (!passwordValid)
        {
            Console.WriteLine($"Login failed: Invalid password for user {model.Email}");
            return Unauthorized("Invalid credentials");
        }

        var token = _jwtService.GenerateToken(user);
        return Ok(new { Token = token });
    }
    /// <summary>
    /// Check if email is available
    /// </summary>
    /// <param name="email"></param>
    /// <returns>
    /// 200 OK with boolean value indicating whether the email is available or not.
    /// </returns>
    //Endpoint to check email availability
    [HttpGet("check-email")]
    public async Task<IActionResult> CheckEmailAvailability([FromQuery] string email){
        var isAvailable = !await _context.Users.AnyAsync(u => u.Email == email);
        return Ok(new { IsAvailable = isAvailable });
    }
}
