using Microsoft.EntityFrameworkCore;

namespace EatInOsloMVC.Models{

    public class EatInOsloMVC:DbContext{
        public EatInOsloContext(DbContextOptions<EatInOsloContext> options):base(options){}

        public DbSet<Restaurant> Restaurant {get; set;}

        public DbSet<Review> Review {get; set;}
    }
}