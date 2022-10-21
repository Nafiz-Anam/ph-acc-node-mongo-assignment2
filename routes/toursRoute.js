const express = require("express");
const router = express.Router();
const tourController = require('../controllers/tourController')

router
    .route('/')
    .get(tourController.getTours)
    .post(tourController.createTours)

router
    .route('/:id').get(tourController.getTourById)

module.exports=router