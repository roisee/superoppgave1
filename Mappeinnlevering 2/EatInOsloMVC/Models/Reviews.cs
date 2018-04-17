using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EatInOsloMVC.Models{

    public class Review{
        [Key]
        public int ID { get; set; }

        public string AuthorName { get; set; }

        public string Title{ get; set; }

        public string ReviewText { get; set; }
        [ForeignKey("RestaurantID")]
        public Restaurant Restaurant {get; set;}
        public int? RestaurantID {get; set;}
    }
}