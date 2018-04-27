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

        public async Task<IActionResult> AdminPage(int? id){
            List<Restaurant> restaurantList = await _context.Restaurant.ToListAsync();
            return View(restaurantList);
        } 

        public async Task<IActionResult> AllReviews(int? id){
            List<Review> reviewList = await _context.Review.ToListAsync();
            return View(reviewList);
        } 
    
        [HttpGet]
        public async Task<IActionResult> EditReviews(int id){
            Review review = await _context.Review.SingleOrDefaultAsync(_review => _review.ID == id);
            return View(review);
        }

        [HttpPost]
        public async Task<IActionResult> EditReviews(int id, [Bind("ID, AuthorName, Title, ReviewText, Restaurant, RestaurantID")] Review review){

            _context.Update(review);
            await _context.SaveChangesAsync();

            return RedirectToAction(nameof(AllReviews));
        }

        [HttpGet]
        public async Task<IActionResult> DeleteReviews(int? id){
            Review review = await _context.Review.SingleOrDefaultAsync(_review => _review.ID == id);
            return View(review);
        }

        [HttpPost, ActionName("DeleteReviews")]
        public async Task<IActionResult> DeleteReviewsConfirm(int? id){
            Review review = await _context.Review.SingleOrDefaultAsync(_review => _review.ID == id);
            _context.Review.Remove(review);
            await _context.SaveChangesAsync();

            return RedirectToAction(nameof(AllReviews));
        }
        
        [HttpGet]
        public async Task<IActionResult> EditRestaurants(int id){
            Restaurant restaurant = await _context.Restaurant.SingleOrDefaultAsync(_restaurant => _restaurant.ID == id);
            return View(restaurant);
        }

        [HttpPost]
        public async Task<IActionResult> EditRestaurants(int id, [Bind("ID, RestaurantName")] Restaurant restaurant){
            
            _context.Update(restaurant);
            await _context.SaveChangesAsync();

            return RedirectToAction(nameof(AdminPage));
        }

        [HttpGet]
        public async Task<IActionResult> DeleteRestaurants(int? id){
            Restaurant restaurant = await _context.Restaurant.SingleOrDefaultAsync(_restaurant => _restaurant.ID == id);
            return View(restaurant);
        }

        [HttpPost, ActionName("DeleteRestaurants")]
        public async Task<IActionResult> DeleteRestaurantsConfirm(int? id){
            Restaurant restaurant = await _context.Restaurant.SingleOrDefaultAsync(_restaurant => _restaurant.ID == id);
            _context.Restaurant.Remove(restaurant);
            await _context.SaveChangesAsync();

            return RedirectToAction(nameof(AdminPage));
        }

         public IActionResult AddRestaurants(){
            return View();
        }   

         [HttpPost]
        public async Task<IActionResult> AddRestaurants([Bind("ID, RestaurantName")]Restaurant restaurant){
            if(ModelState.IsValid){
                _context.Restaurant.Add(restaurant);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(AdminPage));
            }else{
                return View(restaurant);
            }
        }


    }
}