const mongoose = require('mongoose');

const cakeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: Number, required: false },
  email: { type: String, required: true },
  date: { type: String, required: true },
  totalPrice: { type: Number, required: true },
  status: { type: String, required: true },
  products: { type: Array, required: true },
});

module.exports = mongoose.model('Order', cakeSchema);