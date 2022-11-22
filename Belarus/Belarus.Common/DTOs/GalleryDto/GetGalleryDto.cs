using Belarus.Model.Models;

namespace Belarus.Common.DTOs.GalleryDto;

public class GetGalleryDto
{
    public string Title { get; set; }

    public DateTime Date { get; set; }
    
    public List<string> Photos { get; set; }
}