const MAIN_URL = (process.env.NODE_ENV === 'production') ? 'http://buba-bakery.herokuapp.com' : 'http://localhost:7000';
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;



passport.use(new GoogleStrategy({
  clientID: '944032748754-f9o5hndrub1n4fegenshc87to9mjpcl6.apps.googleusercontent.com',
  clientSecret: '8AUbk1ha-smAVgOOHHAgwFaC',
  callbackURL: `${MAIN_URL}/auth/google/callback`, //'http://localhost:7000/auth/google/callback',
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
