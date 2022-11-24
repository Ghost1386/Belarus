using Microsoft.AspNetCore.Http;

namespace Belarus.Common.DTOs.PreviewDto;

public class CreatePreviewDto
{
    public string Title { get; set; }
    
    public string MainText { get; set; }
    
    public string Text { get; set; }
    
    public DateTime Date { get; set; }
    
    public List<IFormFile> Photos { get; set; }
}