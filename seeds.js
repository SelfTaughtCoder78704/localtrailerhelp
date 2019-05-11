var mongoose = require("mongoose");
var Trailer = require("./models/trailer-model");
var Review   = require("./models/review");
 
var data = [
    {
        kind: "22 foot trailer", 
        img: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        kind: "16ft trailer", 
        img: "https://farm6.staticflickr.com/5487/11519019346_f66401b6c1.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        kind: "14ft trailer", 
        img: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    }
]
 
function seedDB(){
   //Remove all Trailers
   Trailer.deleteMany({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed Trailers!");
        Review.deleteMany({}, function(err) {
            if(err){
                console.log(err);
            }
            console.log("removed Reviews!");
             //add a few Trailers
            data.forEach(function(seed){
                Trailer.create(seed, function(err, trailer){
                    if(err){
                        console.log(err)
                    } else {
                       
                        //create a Review
                        Review.create(
                            {
                                author: "Homer",
                                comment: "BANG BANG BANG"
                            }, function(err, review){
                                if(err){
                                    console.log(err);
                                } else {
                                    trailer.reviews.push(review);
                                    trailer.save();
                                    console.log("Created new Review");
                                }
                            });
                    }
                });
            });
        });
    }); 
    //add a few comments
}
 
module.exports = seedDB;