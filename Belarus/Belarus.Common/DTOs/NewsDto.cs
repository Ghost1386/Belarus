using Microsoft.AspNetCore.Http;

namespace Belarus.Common.DTOs;

public class NewsDto
{
    public string Title { get; set; }
    
    public string Text { get; set; }
    
    public DateTime Date { get; set; }
    
    public List<IFormFile> Images { get; set; }
    
    public string VideoUrl { get; set; }
}