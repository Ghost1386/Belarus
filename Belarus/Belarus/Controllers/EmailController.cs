using Belarus.BusinessLogic.Interfaces;
using Belarus.Common.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace Belarus.Controllers;

[Route("api/[controller]")]
[ApiController]
public class EmailController  : ControllerBase
{
    private readonly IEmailService _emailService;
    private readonly ILogger<EmailController> _logger;
    
    public EmailController(IEmailService emailService, ILogger<EmailController> logger)
    {
        _emailService = emailService;
        _logger = logger;
    }
    
    [Route("postAppeal")]
    [HttpPost]
    public IActionResult Post([FromForm] AppealDto appealDto )
    {
        try
        {
            _emailService.AppealBody(appealDto);
        
            _logger.LogInformation($"{DateTime.Now}: Sended new appeal");
            
            return Ok();
        }
        catch (Exception e)
        {
            _logger.LogError($"{DateTime.Now}: {e}");

            return BadRequest();
        }
    }
    
    [Route("postIntroduction")]
    [HttpPost]
    public IActionResult Post([FromForm] IntroductionDto introductionDto)
    {
        try
        {
            _emailService.IntroductionBody(introductionDto);
        
            _logger.LogInformation($"{DateTime.Now}: Sended new introduction");
            
            return Ok();
        }
        catch (Exception e)
        {
            _logger.LogError($"{DateTime.Now}: {e}");

            return BadRequest();
        }
    }
}