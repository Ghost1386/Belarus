﻿using Belarus.BusinessLogic.Interfaces;
using Belarus.Common.DTOs.GalleryDto;
using Belarus.Model.Models;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

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
    [HttpPost]
    public IActionResult GalleryGet([FromBody] Identifier identifier)
    {
        try
        {
            var gallery = _galleryService.Get(identifier.Id);

            var listGallery = new List<GetGalleryDto?> { gallery };

            var jsonGallery = JsonSerializer.Serialize(listGallery);

            return Ok(jsonGallery);
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