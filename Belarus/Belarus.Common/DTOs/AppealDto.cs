using Microsoft.AspNetCore.Http;

namespace Belarus.Common.DTOs;

public class AppealDto
{
    public string Name { get; set; }
    public string Mail { get; set; }
    public string Theme { get; set; }
    public string Text { get; set; }
    
    public string FileName { get; set; }
    
    public IFormFile FormFile { get; set; }
}