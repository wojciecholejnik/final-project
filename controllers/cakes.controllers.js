const Cake = require('../models/cake.model');

exports.getAll = async (req, res) => {
  try {
    res.json(await Cake.find());
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};

exports.getById = async (req, res) => {
  try {
    const cake = await Cake.findById(req.params.id);
    if(!cake) res.status(404).json({ message: 'Not found' });
    else res.json(cake);
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};