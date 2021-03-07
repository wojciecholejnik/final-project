const express = require('express');
const router = express.Router();

const ordersController = require('../controllers/orders.controllers');


router.get('/orders', ordersController.getAll);
router.get('/orders/:id', ordersController.getById);
router.post('/orders', ordersController.post);

module.exports = router;