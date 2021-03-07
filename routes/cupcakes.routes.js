const express = require('express');
const router = express.Router();

const cupCakesController = require('../controllers/cupcakes.controllers');


router.get('/cupcakes', cupCakesController.getAll);
router.get('/cupcakes/:id', cupCakesController.getById);

module.exports = router;