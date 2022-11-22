using Belarus.Model.Models;
using Microsoft.AspNetCore.Http;

namespace Belarus.Common.DTOs.GalleryDto;

public class CreateGalleryDto
{
    public string Title { get; set; }

    public DateTime Date { get; set; }
    
    public List<IFormFile> Photos { get; set; }
}