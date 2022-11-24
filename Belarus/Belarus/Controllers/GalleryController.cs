using System.Text.Json;
using Belarus.BusinessLogic.Interfaces;
using Belarus.Common.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace Belarus.Controllers;

[Route("api/[controller]")]
[ApiController]
public class GalleryController : ControllerBase
{
    private readonly IGalleryService _galleryService;
    private readonly ILogger<GalleryController> _logger;
    
    public GalleryController(IGalleryService galleryService, ILogger<GalleryController> logger)
    {
        _galleryService = galleryService;
        _logger = logger;
    }
    
    [Route("galleryGet")]
    [HttpGet]
    public IActionResult GalleryGet(SearchDto searchDto)
    {
        try
        {
            var gallery = _galleryService.Get(searchDto);

            var jsonGallery = JsonSerializer.Serialize(gallery);

            return Ok(jsonGallery);
        }
        catch (Exception e)
        {
            _logger.LogError($"{DateTime.Now}: {e}");

            return BadRequest();
        }
    }
    
    [Route("galleryGetAll")]
    [HttpGet]
    public async Task<IActionResult> GalleryGetAll()
    {
        try
        {
            var gallery = await _galleryService.GetAll();

            var jsonGallery = JsonSerializer.Serialize(gallery);
            
            return Ok(jsonGallery);
        }
        catch (Exception e)
        {
            _logger.LogError($"{DateTime.Now}: {e}");

            return BadRequest();
        }
    }
}