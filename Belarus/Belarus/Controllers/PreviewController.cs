using System.Text.Json;
using Belarus.BusinessLogic.Interfaces;
using Belarus.Common.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace Belarus.Controllers;

[Route("api/[controller]")]
[ApiController]
public class PreviewController : ControllerBase
{
    private readonly IPreviewService _previewService;
    private readonly ILogger<PreviewController> _logger;

    public PreviewController(IPreviewService previewService, ILogger<PreviewController> logger)
    {
        _previewService = previewService;
        _logger = logger;
    }
    
    [Route("previewGet")]
    [HttpGet]
    public IActionResult PreviewGet(SearchDto searchDto)
    {
        try
        {
            var preview = _previewService.Get(searchDto);

            var jsonPreview = JsonSerializer.Serialize(preview);

            return Ok(jsonPreview);
        }
        catch (Exception e)
        {
            _logger.LogError($"{DateTime.Now}: {e}");

            return BadRequest();
        }
    }
    
    [Route("previewGetAll")]
    [HttpGet]
    public async Task<IActionResult> PreviewGetAll()
    {
        try
        {
            var preview = await _previewService.GetAll();

            var jsonPreview = JsonSerializer.Serialize(preview);
            
            return Ok(jsonPreview);
        }
        catch (Exception e)
        {
            _logger.LogError($"{DateTime.Now}: {e}");

            return BadRequest();
        }
    }
}