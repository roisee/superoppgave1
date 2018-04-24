using Microsoft.AspNetCore.Mvc;
using EatInOsloMVC.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace EatInOsloMVC.Controllers{
    public class UserRestaurantController:Controller{

        private readonly EatInOsloContext _context;

        public UserRestaurantController(EatInOsloContext context){
            _context = context;
        }
        public IActionResult Welcome(){
            return View();
        }

        public async Task<IActionResult> ShowRestaurants(){
            List<Restaurant> restaurantList = await _context.Restaurant.ToListAsync();
            return View(restaurantList);
        }

        public IActionResult ShowReviews(){
            return View();
        }

        public IActionResult WriteReview(){
            return View();
        }
    }
}