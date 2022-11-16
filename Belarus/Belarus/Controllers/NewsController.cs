using System.Text.Json;
using Belarus.BusinessLogic.Interfaces;
using Belarus.Common.DTOs.NewsDto;
using Microsoft.AspNetCore.Mvc;

namespace Belarus.Controllers;

[Route("api/[controller]")]
[ApiController]
public class NewsController : ControllerBase
{
    private readonly INewsService _newsService;
    private readonly ILogger<NewsController> _logger;
    
    public NewsController(INewsService newsService, ILogger<NewsController> logger)
    {
        _newsService = newsService;
        _logger = logger;
    }
    
    [Route("newsGetAll")]
    [HttpGet]
    public async Task<IActionResult> NewsGetAll()
    {
        try
        {
            var news = await _newsService.GetAll();

            var jsonNews = JsonSerializer.Serialize(news);
            
            return Ok(jsonNews);
        }
        catch (Exception e)
        {
            _logger.LogError($"{DateTime.Now}: {e}");

            return BadRequest();
        }
    }
}