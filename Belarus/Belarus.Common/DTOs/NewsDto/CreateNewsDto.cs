using Microsoft.AspNetCore.Http;

namespace Belarus.Common.DTOs.NewsDto;

public class CreateNewsDto
{
    public string Title { get; set; }
    
    public string Text { get; set; }

    public DateTime Date { get; set; }
    
    public List<IFormFile> Photos { get; set; }
    
    public string VideoUrl { get; set; }
}