using Belarus.BusinessLogic.Interfaces;
using Belarus.Common.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace Belarus.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AppealController  : ControllerBase
{
    private readonly IAppealService _appealService;
    private readonly ILogger<AppealController> _logger;
    
    public AppealController(IAppealService appealService, ILogger<AppealController> logger)
    {
        _appealService = appealService;
        _logger = logger;
    }
    
    [Route("post")]
    [HttpPost]
    public IActionResult Post([FromForm] AppealDto appealDto)
    {
        try
        {
            _appealService.AppealSend(appealDto);
        
            _logger.LogInformation($"Sended new appeal");
            
            return Ok();
        }
        catch (Exception e)
        {
            _logger.LogInformation($"{e}");

            return BadRequest();
        }
    }
}