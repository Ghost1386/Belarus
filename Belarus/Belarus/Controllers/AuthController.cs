using Belarus.BusinessLogic.Interfaces;
using Belarus.Common.DTOs;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace Belarus.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AuthController : ControllerBase
{
    private readonly IAuthService _authService;
    private readonly ILogger<AuthController> _logger;
    
    public AuthController(IAuthService authService, ILogger<AuthController> logger)
    {
        _authService = authService;
        _logger = logger;
    }

    [Route("post")]
    [HttpPost]
    public IActionResult Post([FromBody] AuthDto authDto) 
    {
        try
        {
            var token = _authService.CheckAuthorization(authDto);
            
            if (!string.IsNullOrEmpty(token))
            {
                _logger.LogInformation($"{DateTime.Now}: Admin logged in");

                var jsonToken = JsonSerializer.Serialize(token);
                
                return Ok(jsonToken);
            }
        
            _logger.LogWarning($"{DateTime.Now}: Failed login attempt");

            var jsonToken1 = JsonSerializer.Serialize(string.Empty);

            return Unauthorized(jsonToken1);
        }
        catch (Exception e)
        {
            _logger.LogError($"{DateTime.Now}: {e}");

            var jsonToken2 = JsonSerializer.Serialize(string.Empty);

            return BadRequest(jsonToken2);
        }
    }
}