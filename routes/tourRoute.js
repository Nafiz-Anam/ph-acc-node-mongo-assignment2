const express=require('express')
const tourController = require('../controllers/tourController')
const router=express.Router()


router
    .route('/:id')
    .patch(tourController.updateTourById)

router
    .route('/trending')
    .get(tourController.getTrendingTour)

router
    .route('/cheapest')
    .get(tourController.getCheapestTour)
    
module.exports=router