using System.Text.Json;
using Belarus.BusinessLogic.Interfaces;
using Belarus.Common.DTOs;
using Belarus.Common.DTOs.GalleryDto;
using Belarus.Common.DTOs.NewsDto;
using Belarus.Model.Enums;
using Microsoft.AspNetCore.Mvc;

namespace Belarus.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AdminController : ControllerBase
{
    private readonly INewsService _newsService;
    private readonly IGalleryService _galleryService;
    private readonly ILogger<AdminController> _logger;
    
    public AdminController(INewsService newsService, IGalleryService galleryService, ILogger<AdminController> logger)
    {
        _newsService = newsService;
        _galleryService = galleryService;
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
    public IActionResult Delete([FromForm] SearchDto searchDto)
    {
        try
        {
            var response = false;
            
            if (Convert.ToInt32(searchDto.Type) == (int) TypesEnum.News)
            {
                response = _newsService.Delete(searchDto);
            }
            else if (Convert.ToInt32(searchDto.Type) == (int) TypesEnum.Gallery)
            {
                response = _galleryService.Delete(searchDto);
            }
            
            _logger.LogInformation($"{DateTime.Now}: Deleted {searchDto.Title} {searchDto.Type}");
            
            var jsonResponse = JsonSerializer.Serialize(response);
            
            return Ok(jsonResponse);
        }
        catch (Exception e)
        {
            _logger.LogError($"{DateTime.Now}: {e}");

            return BadRequest();
        }
    }
    
    [Route("galleryCreate")]
    [HttpPost]
    public IActionResult GalleryCreate([FromForm] CreateGalleryDto galleryDto)
    {
        try
        {
            var response = _galleryService.Create(galleryDto);
        
            _logger.LogInformation($"{DateTime.Now}: Created new gallery");

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