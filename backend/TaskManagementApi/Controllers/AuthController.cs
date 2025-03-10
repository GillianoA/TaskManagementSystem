using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BCrypt.Net;


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
            PasswordHash = BCrypt.Net.BCrypt.HashPassword(model.Password)
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
        if(user == null || !BCrypt.Net.BCrypt.Verify(model.Password, user.PasswordHash)){
            return Unauthorized("Invalid credentials.");
        }

        var token = _jwtService.GenerateToken(user);
        return Ok(new { Token = token });
    }
}
