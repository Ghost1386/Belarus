namespace Belarus.Common.DTOs.PreviewDto;

public class GetPreviewDto
{
    public string Title { get; set; }
    
    public string MainText { get; set; }
    
    public string Text { get; set; }
    
    public DateTime Date { get; set; }
    
    public List<string> Photos { get; set; }
}