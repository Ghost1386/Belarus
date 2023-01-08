using Microsoft.AspNetCore.Http;

namespace Belarus.Common.DTOs.DocumentDto;

public class CreateDocumentDto
{
    public string Title { get; set; }

    public string Path { get; set; }

    public IFormFile File { get; set; }
}