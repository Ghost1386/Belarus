using Microsoft.AspNetCore.Http;

namespace Belarus.Common.DTOs.СontestDto;

public class CreateСontestDto
{
    public string Title { get; set; }
    
    public string Text { get; set; }
    
    public DateTime Date { get; set; }
    
    public List<IFormFile> Photos { get; set; }
}