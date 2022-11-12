using Belarus.Model.Enums;

namespace Belarus.Model.Models;

public class Photo
{
    public int Id { get; set; }
    
    public string PhotoInByteString { get; set; }
    
    public TypesEnum Type { get; set; }
    
    public int TypeId { get; set; }
}