using System.Text.Json;
using Belarus.BusinessLogic.Interfaces;
using Belarus.Common.DTOs;
using Belarus.Common.DTOs.GalleryDto;
using Belarus.Common.DTOs.NewsDto;
using Belarus.Common.DTOs.PreviewDto;
using Belarus.Common.DTOs.СontestDto;
using Belarus.Model.Enums;
using Microsoft.AspNetCore.Mvc;

namespace Belarus.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AdminController : ControllerBase
{
    private readonly INewsService _newsService;
    private readonly IGalleryService _galleryService;
    private readonly IСontestService _сontestService;
    private readonly IPreviewService _previewService;
    private readonly ILogger<AdminController> _logger;
    
    public AdminController(INewsService newsService, IGalleryService galleryService, IСontestService сontestService, 
        ILogger<AdminController> logger, IPreviewService previewService)
    {
        _newsService = newsService;
        _galleryService = galleryService;
        _сontestService = сontestService;
        _previewService = previewService;
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
    
    [Route("contestCreate")]
    [HttpPost]
    public IActionResult СontestCreate([FromForm] CreateСontestDto contestDto)
    {
        try
        {
            var response = _сontestService.Create(contestDto);
        
            _logger.LogInformation($"{DateTime.Now}: Created new contest");

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
    
    [Route("previewCreate")]
    [HttpPost]
    public IActionResult PreviewCreate([FromForm] CreatePreviewDto previewDto)
    {
        try
        {
            var response = _previewService.Create(previewDto);
        
            _logger.LogInformation($"{DateTime.Now}: Created new preview");

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
            
            if (Convert.ToInt32(searchDto.Type) == (int)TypesEnum.News)
            {
                response = _newsService.Delete(searchDto);
            }
            else if (Convert.ToInt32(searchDto.Type) == (int) TypesEnum.Gallery)
            {
                response = _galleryService.Delete(searchDto);
            }
            else if (Convert.ToInt32(searchDto.Type) == (int) TypesEnum.Сontest)
            {
                response = _сontestService.Delete(searchDto);
            }
            else if (Convert.ToInt32(searchDto.Type) == (int) TypesEnum.Preview)
            {
                response = _previewService.Delete(searchDto);
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
}