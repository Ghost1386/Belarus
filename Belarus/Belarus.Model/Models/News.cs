using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Belarus.Model.Models;

public class News
{
    [Key]
    public int Id { get; set; }
    
    public string Title { get; set; }
    
    public string Text { get; set; }
    
    public DateTime Date { get; set; }
    
    [ForeignKey("TypeId")]
    public List<Photo> Photos { get; set; }

    public string VideoUrl { get; set; }
}