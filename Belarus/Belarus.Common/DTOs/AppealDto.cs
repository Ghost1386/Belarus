using Microsoft.AspNetCore.Http;

namespace Belarus.Common.DTOs;

public class AppealDto
{
    public string Name { get; set; } = null!;
    public string Mail { get; set; } = null!;
    public string Theme { get; set; } = null!;
    public string Text { get; set; } = null!;

    public List<IFormFile> FormFile { get; set; }
}