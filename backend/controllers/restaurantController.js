const Restaurant = require("../models/restaurant");
const ErrorHandler = require("../utils/errorHandler");
const catchAsync = require("../middlewares/catchAsyncErrors");
const APIFeatures = require("../utils/apiFeatures");

exports.getAllRestaurants = catchAsync(async (req, res, next) => {
  const apiFeatures = new APIFeatures(Restaurant.find(), req.query)
    .search()
    .sort();
  const restaurants = await apiFeatures.query;
  res.status(200).json({
    status: "success",
    count: restaurants.length,
    restaurants: restaurants,
  });
});

// exports.createRestaurant = catchAsync(async (req, res, next) => {
//   const restaurant = await Restaurant.create(req.body);
//   res.status(201).json({
//     status: "success",
//     data: restaurant,
//   });
// });

exports.createRestaurant = async (req, res) => {
    try { const restaurant = await Restaurant.create(req.body);
  res.status(201).json({
    status: "success",
    data: restaurant,
    
  })
    } catch (err) {
        console.log(err);

        return res.status(500).json({
            success: false,
            message: err.message
        });
    }
    console.log(req.body);
console.log(req.body.latitude);
console.log(req.body.longitude);
};


//Get restaurant by id
exports.getRestaurant = catchAsync(async (req, res, next) => {
  const restaurant = await Restaurant.findById(req.params.storeId);

  if (!restaurant)
    return next(new ErrorHandler("No Restaurant found with that ID", 404));

  res.status(200).json({
    status: "success",
    data: restaurant,
  });
});

exports.deleteRestaurant = catchAsync(async (req, res, next) => {
  const restaurant = await Restaurant.findByIdAndDelete(req.params.storeId);

  if (!restaurant)
    return next(new ErrorHandler("No document found with that ID", 404));

  res.status(204).json({
    status: "success",
  });
});
