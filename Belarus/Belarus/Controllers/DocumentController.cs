using System.Text.Json;
using Belarus.BusinessLogic.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Belarus.Controllers;

[Route("api/[controller]")]
[ApiController]
public class DocumentController : ControllerBase
{
    private readonly IDocumentService _documentService;
    private readonly ILogger<DocumentController> _logger;

    public DocumentController(IDocumentService documentService, ILogger<DocumentController> logger)
    {
        _documentService = documentService;
        _logger = logger;
    }
    
    [Route("getAlldocuments")]
    [HttpGet]
    public async Task<IActionResult> DocumentGetAll()
    {
        try
        {
            var documents = await _documentService.GetAll();

            var jsonDocuments = JsonSerializer.Serialize(documents);
            
            return Ok(jsonDocuments);
        }
        catch (Exception e)
        {
            _logger.LogError($"{DateTime.Now}: {e}");

            return BadRequest();
        }
    }
}