namespace Belarus.Common.DTOs.СontestDto;

public class GetСontestDto
{
    public int Id { get; set; }

    public string Title { get; set; }

    public string MainText { get; set; }

    public string Text { get; set; }

    public DateTime Date { get; set; }

    public List<string> Photos { get; set; }
}