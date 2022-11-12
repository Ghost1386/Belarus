using Belarus.BusinessLogic.Interfaces;
using Belarus.Common.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace Belarus.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AdminController : ControllerBase
{
    private readonly INewsService _newsService;
    private readonly ILogger<AdminController> _logger;
    
    public AdminController(INewsService newsService, ILogger<AdminController> logger)
    {
        _newsService = newsService;
        _logger = logger;
    }
    
    [Route("newsCreate")]
    [HttpPost]
    public IActionResult NewsCreate([FromForm] NewsDto newsDto )
    {
        try
        {
            _newsService.Create(newsDto);
        
            _logger.LogInformation($"{DateTime.Now}: Created new news");
            
            return Ok();
        }
        catch (Exception e)
        {
            _logger.LogError($"{DateTime.Now}: {e}");

            return BadRequest();
        }
    }
}