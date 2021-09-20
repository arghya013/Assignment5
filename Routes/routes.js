const express = require('express');

var RestaurantController = require('../Controllers/Restaurants');
var MealtypeController = require('../Controllers/Mealtype');

const router = express.Router();

router.get('/:cityname', RestaurantController.getRestaurantByCityName);
router.get('/widget', MealtypeController.getMealtypes);

module.exports = router;