using Microsoft.AspNetCore.Mvc;

namespace EatInOsloMVC.Controllers{
    public class UserRestaurantController:Controller{
        public IActionResult Welcome(){
            return View();
        }

        public IActionResult ShowReviews(){
            return View();
        }

        public IActionResult WriteReview(){
            return View();
        }
    }
}