using Belarus.BusinessLogic.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace Belarus.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AboutUsController : ControllerBase
{
    private readonly IAboutUsService _aboutUsService;
    private readonly ILogger<AboutUsController> _logger;

    public AboutUsController(IAboutUsService aboutUsService, ILogger<AboutUsController> logger)
    {
        _aboutUsService = aboutUsService;
        _logger = logger;
    }

    [Route("getAllAboutUs")]
    [HttpGet]
    public async Task<IActionResult> AboutUsGetAll()
    {
        try
        {
            var aboutUs = await _aboutUsService.GetAll();

            var jsonAboutUs = JsonSerializer.Serialize(aboutUs);

            return Ok(jsonAboutUs);
        }
        catch (Exception e)
        {
            _logger.LogError($"{DateTime.Now}: {e}");

            return BadRequest();
        }
    }
}