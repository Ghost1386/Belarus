using Belarus.Model.Models;
using Microsoft.EntityFrameworkCore;

namespace Belarus.Model;

public class ApplicationContext : DbContext
{
    public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
    {
        Database.EnsureCreated();
    }
    
    public DbSet<News> News { get; set; }
    public DbSet<Gallery> Galleries { get; set; }
    public DbSet<Сontest> Сontests { get; set; }
    public DbSet<Photo> Photos { get; set; }
}
