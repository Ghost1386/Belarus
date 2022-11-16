using Belarus.Model.Enums;

namespace Belarus.Common.DTOs;

public class SearchDto
{
    public string Title { get; set; }

    public DateTime Date { get; set; }
    
    public TypesEnum Type { get; set; }
}