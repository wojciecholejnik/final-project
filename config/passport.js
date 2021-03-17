const MAIN_URL = (process.env.NODE_ENV === 'production') ? 'http://buba-bakery.herokuapp.com' : 'http://localhost:7000';
const passport = require('passport');
const passwords = require('./passwords');
const GoogleStrategy = require('passport-google-oauth20').Strategy;



passport.use(new GoogleStrategy({
  clientID: (process.env.NODE_ENV === 'production') ? process.env.clientID : passwords.clientID,
  clientSecret: (process.env.NODE_ENV === 'production') ? process.env.clientSecret : passwords.clientSecret,
  callbackURL: `${MAIN_URL}/auth/google/callback`,
}, (accessToken, refreshToken, profile, done) => {
  done(null, profile);
}));

// serialize user when saving to session
passport.serializeUser((user, serialize) => {
  serialize(null, user);
});

// deserialize user when reading from session
passport.deserializeUser((obj, deserialize) => {
  deserialize(null, obj);
});
