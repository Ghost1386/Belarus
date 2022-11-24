using System.Text.Json;
using Belarus.BusinessLogic.Interfaces;
using Belarus.Common.DTOs;
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
    public IActionResult СontestGet(SearchDto searchDto)
    {
        try
        {
            var contest = _contestService.Get(searchDto);

            var jsonContest = JsonSerializer.Serialize(contest);

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