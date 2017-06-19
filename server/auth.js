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
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('Bearer'), // with scheme is necessary
};

const jwtStrategyCallback = (payload, done) => {
  User.findById(payload.id)
    .then((user) => {
      if (user) {
        done(null, {
          id: user.id,
          nick: user.nick,
          name: user.name,
          surname: user.surname,
          email: user.email,
          address: user.address,
          role: payload.role,
        });
        return Promise.resolve();
      }
      done(new Error('User not found'), null);
      return Promise.reject();
    })
    .catch((error) => {
      done(error, null);
      return Promise.reject();
    });
};

const strategy = new Strategy(jwtStrategyOptions, jwtStrategyCallback);
passport.use(strategy);

module.exports = {
  initialize: () => passport.initialize(),
  authenticate: passport.authenticate('jwt', config.jwtSession || { session: false }),
  issueToken: payload => jwt.sign(payload, config.jwtSecret),
};
