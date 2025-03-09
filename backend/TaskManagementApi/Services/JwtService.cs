using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using System.Text;

public class JwtService{
    private readonly string _secret;
    private readonly string _issuer;
    private readonly string _audience;
    private readonly int _expiryMinutes;

    public JwtService(IConfiguration configuration){
        _secret = configuration["Jwt:Secret"] ?? 
            throw new ArgumentNullException("Jwt:Secret configuration is missing");
        _issuer = configuration["Jwt:Issuer"] ?? 
            throw new ArgumentNullException("Jwt:Issuer configuration is missing");
        _audience = configuration["Jwt:Audience"] ?? 
            throw new ArgumentNullException("Jwt:Audience configuration is missing");
        
        var expiryMinutes = configuration["Jwt:ExpiryMinutes"];
        if (string.IsNullOrEmpty(expiryMinutes) || !int.TryParse(expiryMinutes, out _expiryMinutes)){
            throw new ArgumentException("Jwt:ExpiryMinutes configuration is missing or invalid");
        }
    }

    public string GenerateToken(User user){
        var claims = new[]{
            new Claim(JwtRegisteredClaimNames.Sub, user.Username),
            new Claim(JwtRegisteredClaimNames.Email, user.Email),
            new Claim("id", user.Id.ToString()),
            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
        };

        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_secret));
        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        var token = new JwtSecurityToken(
            issuer: _issuer,
            audience: _audience,
            claims: claims,
            expires: DateTime.UtcNow.AddMinutes(_expiryMinutes),
            signingCredentials: creds
        );

        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}
