const Order = require('../models/order.model');

exports.getAll = async (req, res) => {
  try {
    res.json(await Order.find());
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};

exports.getById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if(!order) res.status(404).json({ message: 'Not found' });
    else res.json(order);
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};

exports.post = async (req, res) => {
  const { name, phone, email, date, totalPrice, products } = req.body;

  try {
    const newOrder = new Order({
      name: name,
      phone: phone,
      email: email,
      date: date,
      totalPrice: totalPrice,
      status: 'received',
      products: products,
    });
    await newOrder.save();
    res.json({ message: 'OK' });
  } catch(err) {
    res.status(500).json({message: err});
  }
};
