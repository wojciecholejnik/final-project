const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const cakesRoutes = require('./routes/cakes.routes');
const cupcakesRoutes = require('./routes/cupcakes.routes');
const ordersRoutes = require('./routes/orders.routes');

const app = express();

// connect to DB
const dbURI = 'mongodb+srv://wwwojtasss:wwwojtasss@cluster0.bpoyn.mongodb.net/BuBaBakeryDB?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.once('open', () => {
  console.log('Connected to the database');

});
db.on('error', err => console.log('Error ' + err));

// add middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/client/build')));

// routes
app.use('/api', cakesRoutes);
app.use('/api', cupcakesRoutes);
app.use('/api', ordersRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.use((req, res) => {
  res.status(404).send({ message: 'Not found...' });
})

const port = process.env.PORT || 7000;
app.listen(port, () => {
  console.log('Server is running on port: ' + port);
});

