using System.ComponentModel.DataAnnotations.Schema;
using Belarus.Model.Enums;

namespace Belarus.Model.Models;

public class Photo
{
    public int PhotoId { get; set; }
    
    public string PhotoInByteString { get; set; }
    
    public TypesEnum Type { get; set; }
    
    [ForeignKey("Id")]
    public int TypeId { get; set; }
}