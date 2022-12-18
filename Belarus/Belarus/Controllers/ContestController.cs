﻿using System.Text.Json;
using Belarus.BusinessLogic.Interfaces;
using Belarus.Common.DTOs;
using Belarus.Common.DTOs.СontestDto;
using Belarus.Model.Models;
using Microsoft.AspNetCore.Mvc;

namespace Belarus.Controllers;

[Route("api/[controller]")]
[ApiController]
public class ContestController : ControllerBase
{
    private readonly IСontestService _contestService;
    private readonly ILogger<ContestController> _logger;
    
    public ContestController(IСontestService contestService, ILogger<ContestController> logger)
    {
        _contestService = contestService;
        _logger = logger;
    }
    
    [Route("contestGet")]
    [HttpGet]
    public IActionResult СontestGet([FromBody]Identifier identifier)
    {
        try
        {
            var contest = _contestService.Get(identifier.Id);

            var listContest = new List<GetСontestDto?> {contest};

            var jsonContest = JsonSerializer.Serialize(listContest);

            return Ok(jsonContest);
        }
        catch (Exception e)
        {
            _logger.LogError($"{DateTime.Now}: {e}");

            return BadRequest();
        }
    }
    
    [Route("contestGetAll")]
    [HttpGet]
    public async Task<IActionResult> ContestGetAll()
    {
        try
        {
            var contest = await _contestService.GetAll();

            var jsonContest = JsonSerializer.Serialize(contest);
            
            return Ok(jsonContest);
        }
        catch (Exception e)
        {
            _logger.LogError($"{DateTime.Now}: {e}");

            return BadRequest();
        }
    }
}