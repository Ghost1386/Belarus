using System.Text.Json;
using Belarus.BusinessLogic.Interfaces;
using Belarus.Common.DTOs;
using Belarus.Common.DTOs.NewsDto;
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
    public IActionResult NewsCreate([FromForm] CreateNewsDto newsDto )
    {
        try
        {
            var response = _newsService.Create(newsDto);
        
            _logger.LogInformation($"{DateTime.Now}: Created new news");

            var jsonResponse = JsonSerializer.Serialize(response);
            
            return Ok(jsonResponse);
        }
        catch (Exception e)
        {
            _logger.LogError($"{DateTime.Now}: {e}");

            return BadRequest();
        }
    }
    
    [Route("delete")]
    [HttpPost]
    public IActionResult Delete([FromBody] SearchDto searchDto)
    {
        try
        {
            var response = _newsService.Delete(searchDto);
            
            _logger.LogInformation($"{DateTime.Now}: Deleted {searchDto.Title} news");
            
            var jsonResponse = JsonSerializer.Serialize(response);
            
            return Ok(jsonResponse);
        }
        catch (Exception e)
        {
            _logger.LogError($"{DateTime.Now}: {e}");

            return BadRequest();
        }
    }
}