using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations;

namespace Belarus.Common.DTOs;

public class NewsDto
{
    public string Title { get; set; }
    
    public string Text { get; set; }

    public DateTime Date { get; set; }
    
    public List<IFormFile> Photos { get; set; }
    
    public string VideoUrl { get; set; }
}