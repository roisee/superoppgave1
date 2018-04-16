using Microsoft.AspNetCore.Mvc;

namespace EatInOsloMVC.Controllers{
    public class AllRestaurantsController:Controller{
        public string Welcome(){
            return "Her er alle restaurantene";
        }
    }
}