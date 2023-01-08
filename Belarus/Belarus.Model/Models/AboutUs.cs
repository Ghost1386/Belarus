using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Belarus.Model.Models;

public class AboutUs
{
    [Key]
    public int Id { get; set; }

    public string Title { get; set; }

    [ForeignKey("TypeId")]
    public List<Photo> Photos { get; set; }

    public string Link { get; set; }
}