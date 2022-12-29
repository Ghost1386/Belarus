using Microsoft.AspNetCore.Http;

namespace Belarus.Common.DTOs.AboutUsDto;

public class CreateAboutUsDto
{
    public string Title { get; set; }
    
    public List<IFormFile> Photos { get; set; }

    public string Link { get; set; }
}