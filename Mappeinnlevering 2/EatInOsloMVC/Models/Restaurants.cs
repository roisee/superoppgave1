using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EatInOsloMVC.Models{

    public class Restaurant{
        [Key]
        public int ID { get; set; }

        public string RestaurantName{ get; set; }
        
        [ForeignKey("RestaurantID")]

        public ICollection<Review> Review { get; set; }
    }
}

//en annmeldelse kan kun ha en 
//restaurant, men en restaurant 
//kan ha flere annmeldelser