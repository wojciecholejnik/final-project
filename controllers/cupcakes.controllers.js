const Cupcake = require('../models/cupcake.model');

exports.getAll = async (req, res) => {
  try {
    res.json(await Cupcake.find());
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};

exports.getById = async (req, res) => {
  try {
    const cupcake = await Cupcake.findById(req.params.id);
    if(!cupcake) res.status(404).json({ message: 'Not found' });
    else res.json(cupcake);
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};