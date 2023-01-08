using Belarus.BusinessLogic.Interfaces;
using Belarus.Common.DTOs.NewsDto;
using Belarus.Model.Models;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

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

    [Route("get")]
    [HttpPost]
    public IActionResult Get([FromBody] Identifier identifier)
    {
        try
        {
            var news = _newsService.Get(identifier.Id);

            var listNews = new List<GetNewsDto?> { news };

            var jsonNews = JsonSerializer.Serialize(listNews);

            return Ok(jsonNews);
        }
        catch (Exception e)
        {
            _logger.LogError($"{DateTime.Now}: {e}");

            return BadRequest();
        }
    }

    [Route("getAll")]
    [HttpGet]
    public async Task<IActionResult> GetAll()
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