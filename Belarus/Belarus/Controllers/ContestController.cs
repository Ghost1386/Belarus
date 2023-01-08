using Belarus.BusinessLogic.Interfaces;
using Belarus.Common.DTOs.СontestDto;
using Belarus.Model.Models;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

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

    [Route("get")]
    [HttpPost]
    public IActionResult Get([FromBody] Identifier identifier)
    {
        try
        {
            var contest = _contestService.Get(identifier.Id);

            var listContest = new List<GetСontestDto?> { contest };

            var jsonContest = JsonSerializer.Serialize(listContest);

            return Ok(jsonContest);
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