const passwords = require('./passwords');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const cakesRoutes = require('./routes/cakes.routes');
const cupcakesRoutes = require('./routes/cupcakes.routes');
const ordersRoutes = require('./routes/orders.routes');
// eslint-disable-next-line no-unused-vars
const passportSetup = require('./config/passport');
const passport = require('passport');
const session = require('express-session');



const app = express();

// init session mechanism
app.use(session({ secret: 'anything' }));

// init passport
app.use(passport.initialize());
app.use(passport.session());

// connect to DB
const name = (process.env.NODE_ENV === 'production') ? process.env.dbUser : passwords.dbUser ;
const password = (process.env.NODE_ENV === 'production') ? process.env.dbPassword : passwords.dbPassword ;

const dbURI = `mongodb+srv://${name}:${password}@cluster0.bpoyn.mongodb.net/BuBaBakeryDB?retryWrites=true&w=majority`;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.once('open', () => {
});
db.on('error', err => console.log('Error ' + err));

// add middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/client/build')));

// routes
app.use('/api', cakesRoutes);
app.use('/api', cupcakesRoutes);
app.use('/api', ordersRoutes);
app.use('/auth', require('./routes/auth.routes'));
app.get('/user', function(req, res, next) {
  req.user ? res.json({
    email: req.user.emails[0].value,
    name: req.user.name.givenName,
    avatar: req.user.photos[ 0 ].value,
  }) : res.json({
    email: null,
    name: null,
    avatar: null,
  });
});

app.get('/auth/google', passport.authenticate('google', { scope: ['email', 'profile'] }));

app.get('/auth/google/callback/', passport.authenticate('google', { failureRedirect: '/user/no-permission' }),
  (req, res) => {
    res.redirect('/');
  }
);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.use((req, res) => {
  res.status(404).send({ message: 'Not found...' });
});

const port = process.env.PORT || 7000;
app.listen(port, () => {
  console.log('Server is running on port: ' + port);
});

