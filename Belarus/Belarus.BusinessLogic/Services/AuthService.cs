using System.Globalization;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Belarus.BusinessLogic.Interfaces;
using Belarus.Common.DTOs;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using JwtRegisteredClaimNames = Microsoft.IdentityModel.JsonWebTokens.JwtRegisteredClaimNames;

namespace Belarus.BusinessLogic.Services;

public class AuthService : IAuthService
{
    private readonly string? _requiredLogin;
    private readonly string? _requiredPassword;
    private readonly IConfiguration _configuration;
    private readonly IHashService _hashService;

    public AuthService(IConfiguration configuration, IHashService hashService)
    {
        _configuration = configuration;
        _hashService = hashService;
        _requiredLogin = configuration["Authentication:Login"];
        _requiredPassword = configuration["Authentication:Password"];
    }

    public string CheckAuthorization(AuthDto authDto)
    {
        var hashPassword = _hashService.Hash(authDto.Password);

        if (authDto.Login == _requiredLogin &&
            hashPassword == _requiredPassword)
        {
            var claims = new[] {
                new Claim(JwtRegisteredClaimNames.Sub, _configuration["Jwt:Subject"]),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(JwtRegisteredClaimNames.Iat, DateTime.UtcNow.ToString(CultureInfo.CurrentCulture)),
                new Claim("Login", authDto.Login),
                new Claim("Password", hashPassword)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
            var signIn = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var token = new JwtSecurityToken(
                _configuration["Jwt:Issuer"],
                _configuration["Jwt:Audience"],
                claims,
                expires: DateTime.UtcNow.AddMinutes(60),
                signingCredentials: signIn);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        return string.Empty;
    }
}
