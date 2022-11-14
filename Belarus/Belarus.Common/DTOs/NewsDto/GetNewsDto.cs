namespace Belarus.Common.DTOs.NewsDto;

public class GetNewsDto
{
    public string Title { get; set; }
    
    public string Text { get; set; }

    public DateTime Date { get; set; }
    
    public List<byte[]> Photos { get; set; }
    
    public string VideoUrl { get; set; }
}