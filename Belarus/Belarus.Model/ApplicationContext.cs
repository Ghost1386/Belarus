using Belarus.Model.Models;
using Microsoft.EntityFrameworkCore;

namespace Belarus.Model;

public class ApplicationContext : DbContext
{
    public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
    {
    }
    
    public virtual DbSet<News> News { get; set; }
    public virtual DbSet<Photo> Photos { get; set; }
}