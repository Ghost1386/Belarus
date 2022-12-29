﻿using System.Text.Json;
using Belarus.BusinessLogic.Interfaces;
using Belarus.Common.DTOs.NewsDto;
using Belarus.Model.Models;
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

    [Route("newsGet")]
    [HttpPost]
    public IActionResult NewsGet([FromBody]Identifier identifier)
    {
        try
        {
            var news = _newsService.Get(identifier.Id);

            var listNews = new List<GetNewsDto?> {news};

            var jsonNews = JsonSerializer.Serialize(listNews);

            return Ok(jsonNews);
        }
        catch (Exception e)
        {
            _logger.LogError($"{DateTime.Now}: {e}");

            return BadRequest();
        }
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