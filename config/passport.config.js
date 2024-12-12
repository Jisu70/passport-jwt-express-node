// config/passport.js
import passport from 'passport';
import bcrypt from 'bcrypt';
import { Strategy as LocalStrategy } from 'passport-local';
const User = require('../models/User.model.js');

// Serializing and Deserializing User (store/retrieve user info in session)
passport.serializeUser((user, done) => {
  done(null, user.id);  // Storing user ID in the session
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);  // Retrieving user from DB using ID stored in the session
  });
});

// Local Strategy: Authentication using username and password
passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',  // Default is 'username', change if using 'email'
    },
    (email, password, done) => {
      // Find user by email
      User.findOne({ email: email }, (err, user) => {
        if (err) return done(err);
        if (!user) return done(null, false, { message: 'Invalid credentials' });

        // Compare passwords using bcrypt
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) return done(err);
          if (isMatch) {
            return done(null, user);  // Successfully authenticated
          } else {
            return done(null, false, { message: 'Invalid credentials' }); // Password doesn't match
          }
        });
      });
    }
  )
);

export default passport;
