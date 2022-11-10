using Belarus.BusinessLogic.Interfaces;
using Belarus.Common.DTOs;
using Microsoft.AspNetCore.Mvc;

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
            
                return Ok(token);
            }
        
            _logger.LogWarning($"{DateTime.Now}: Failed login attempt");

            return StatusCode(401);
        }
        catch (Exception e)
        {
            _logger.LogError($"{DateTime.Now}: {e}");

            return BadRequest();
        }
    }
}