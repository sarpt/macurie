const jwt = require('jsonwebtoken');
const passport = require('passport');
const passportJWT = require('passport-jwt');
const models = require('./models');
const config = require('./config/config');

const ExtractJwt = passportJWT.ExtractJwt;
const Strategy = passportJWT.Strategy;
const User = models.User;

const jwtStrategyOptions = {
  secretOrKey: config.jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeader(),
};

const jwtStrategyCallback = (payload, done) => {
  User.findById(payload.id)
    .then((user) => {
      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    });
};

const strategy = new Strategy(jwtStrategyOptions, jwtStrategyCallback);
passport.use(strategy);

module.exports = {
  initialize: () => passport.initialize(),
  authenticate: () => passport.authenticate('jwt', config.jwtSession || { session: false }),
  issueToken: payload => jwt.sign(payload, config.jwtSecret),
};
