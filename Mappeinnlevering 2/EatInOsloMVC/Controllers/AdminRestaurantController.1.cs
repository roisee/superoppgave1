using Microsoft.AspNetCore.Mvc;
using EatInOsloMVC.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace EatInOsloMVC.Controllers{
    public class AdminRestaurantController:Controller{

        private readonly EatInOsloContext _context;

        public AdminRestaurantController(EatInOsloContext context){
            _context = context;
        }
        public IActionResult WriteReviews(){
            return View();
        }   

         [HttpPost]
        public async Task<IActionResult> WriteReviews([Bind("ID, AuthorName, Title, ReviewText, Restaurant, RestaurantID")]Review review){
            if(ModelState.IsValid){
                _context.Review.Add(review);
                await _context.SaveChangesAsync();
                return View(review);
                //return RedirectToAction(nameof(ShowReviews));
            }else{
                return View(review);
            }
        }

        public async Task<IActionResult> ShowRestaurants(){
            List<Restaurant> restaurantList = await _context.Restaurant.ToListAsync();
            return View(restaurantList);
        }

    [HttpGet]
        public async Task<IActionResult> ShowReviews(int? id){
            Restaurant list = await _context.Restaurant.Include("Review").SingleOrDefaultAsync(_restaurant => _restaurant.ID == id);
            return View(list);
        }

    }
}