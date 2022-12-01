namespace Belarus.Common.DTOs.NewsDto;

public class GetNewsDto
{
    public int Id { get; set; }
    
    public string Title { get; set; }
    
    public string Text { get; set; }

    public DateTime Date { get; set; }
    
    public List<string> Photos { get; set; }
    
    public string VideoUrl { get; set; }
}