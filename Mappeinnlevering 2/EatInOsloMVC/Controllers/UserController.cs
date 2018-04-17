using Microsoft.AspNetCore.Mvc;

namespace EatInOsloMVC.Controllers{
    public class UserRestaurant:Controller{
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