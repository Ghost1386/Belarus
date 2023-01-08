using Belarus.BusinessLogic.Interfaces;
using Belarus.Common.DTOs;
using Belarus.Common.DTOs.AboutUsDto;
using Belarus.Common.DTOs.DocumentDto;
using Belarus.Common.DTOs.GalleryDto;
using Belarus.Common.DTOs.NewsDto;
using Belarus.Common.DTOs.PreviewDto;
using Belarus.Common.DTOs.СontestDto;
using Belarus.Model.Enums;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace Belarus.Controllers;

[Route("api/[controller]")]
[ApiController]
public class AdminController : ControllerBase
{
    private readonly INewsService _newsService;
    private readonly IGalleryService _galleryService;
    private readonly IСontestService _сontestService;
    private readonly IPreviewService _previewService;
    private readonly IAboutUsService _aboutUsService;
    private readonly IDocumentService _documentService;
    private readonly ILogger<AdminController> _logger;

    public AdminController(INewsService newsService, IGalleryService galleryService, IСontestService сontestService,
        ILogger<AdminController> logger, IPreviewService previewService, IAboutUsService aboutUsService, IDocumentService documentService)
    {
        _newsService = newsService;
        _galleryService = galleryService;
        _сontestService = сontestService;
        _previewService = previewService;
        _aboutUsService = aboutUsService;
        _documentService = documentService;
        _logger = logger;
    }

    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [Route("createNews")]
    [HttpPost]
    public IActionResult NewsCreate([FromForm] CreateNewsDto newsDto)
    {
        try
        {
            var response = _newsService.Create(newsDto);

            _logger.LogInformation($"{DateTime.Now}: Created new news");

            var jsonResponse = JsonSerializer.Serialize(response);

            return Ok();
        }
        catch (Exception e)
        {
            _logger.LogError($"{DateTime.Now}: {e}");

            return BadRequest();
        }
    }

    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [Route("createContest")]
    [HttpPost]
    public IActionResult CreateContest([FromForm] CreateСontestDto contestDto)
    {
        try
        {
            var response = _сontestService.Create(contestDto);

            _logger.LogInformation($"{DateTime.Now}: Created new contest");

            var jsonResponse = JsonSerializer.Serialize(response);

            return Ok();
        }
        catch (Exception e)
        {
            _logger.LogError($"{DateTime.Now}: {e}");

            return BadRequest();
        }
    }

    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [Route("createGallery")]
    [HttpPost]
    public IActionResult CreateGallery([FromForm] CreateGalleryDto galleryDto)
    {
        try
        {
            var response = _galleryService.Create(galleryDto);

            _logger.LogInformation($"{DateTime.Now}: Created new gallery");

            var jsonResponse = JsonSerializer.Serialize(response);

            return Ok();
        }
        catch (Exception e)
        {
            _logger.LogError($"{DateTime.Now}: {e}");

            return BadRequest();
        }
    }

    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [Route("createPreview")]
    [HttpPost]
    public IActionResult CreatePreview([FromForm] CreatePreviewDto previewDto)
    {
        try
        {
            var response = _previewService.Create(previewDto);

            _logger.LogInformation($"{DateTime.Now}: Created new preview");

            var jsonResponse = JsonSerializer.Serialize(response);

            return Ok();
        }
        catch (Exception e)
        {
            _logger.LogError($"{DateTime.Now}: {e}");

            return BadRequest();
        }
    }

    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [Route("createAboutUs")]
    [HttpPost]
    public IActionResult AboutUsCreate([FromForm] CreateAboutUsDto aboutUsDto)
    {
        try
        {
            var response = _aboutUsService.Create(aboutUsDto);

            _logger.LogInformation($"{DateTime.Now}: Created new preview");

            var jsonResponse = JsonSerializer.Serialize(response);

            return Ok();
        }
        catch (Exception e)
        {
            _logger.LogError($"{DateTime.Now}: {e}");

            return BadRequest();
        }
    }

    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [Route("createDocument")]
    [HttpPost]
    public IActionResult DocumentCreate([FromForm] CreateDocumentDto documentDto)
    {
        try
        {
            var response = _documentService.Create(documentDto);

            _logger.LogInformation($"{DateTime.Now}: Created new preview");

            var jsonResponse = JsonSerializer.Serialize(response);

            return Ok();
        }
        catch (Exception e)
        {
            _logger.LogError($"{DateTime.Now}: {e}");

            return BadRequest();
        }
    }

    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
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
            else if (Convert.ToInt32(searchDto.Type) == (int)TypesEnum.Gallery)
            {
                response = _galleryService.Delete(searchDto);
            }
            else if (Convert.ToInt32(searchDto.Type) == (int)TypesEnum.Сontest)
            {
                response = _сontestService.Delete(searchDto);
            }
            else if (Convert.ToInt32(searchDto.Type) == (int)TypesEnum.Preview)
            {
                response = _previewService.Delete(searchDto);
            }
            else if (Convert.ToInt32(searchDto.Type) == (int)TypesEnum.AboutUs)
            {
                response = _aboutUsService.Delete(searchDto.Title);
            }
            else if (Convert.ToInt32(searchDto.Type) == (int)TypesEnum.Document)
            {
                response = _documentService.Delete(searchDto.Title);
            }

            _logger.LogInformation($"{DateTime.Now}: Deleted {searchDto.Title} {searchDto.Type}");

            return Ok();
        }
        catch (Exception e)
        {
            _logger.LogError($"{DateTime.Now}: {e}");

            return BadRequest();
        }
    }
}