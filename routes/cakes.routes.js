const express = require('express');
const router = express.Router();

const cakesController = require('../controllers/cakes.controllers');


router.get('/cakes', cakesController.getAll);
router.get('/cakes/:id', cakesController.getById);

module.exports = router;