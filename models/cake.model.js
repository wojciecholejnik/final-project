const mongoose = require('mongoose');

const cakeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  img: { type: String, required: true },
  price: { type: Number, required: false },
});

module.exports = mongoose.model('Cake', cakeSchema);