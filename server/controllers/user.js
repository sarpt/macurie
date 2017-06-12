const models = require('../models');
const auth = require('../auth');

const User = models.User;

module.exports = {
  register(request, response) {
    User.register(request.body)
      .then(user => response.status(201).send(user))
      .catch(error => response.status(401).send(error));
  },
  login(request, response) {
    if (request.body.email && request.body.password) {
      const email = request.body.email;
      const password = request.body.password;

      User.findOne({ where: { email } })
        .then((user) => {
          if (!user) {
            throw (new Error('User not found'));
          } else if (user.password !== password) {
            throw (new Error('Wrong password'));
          }
          return user;
        })
        .then((user) => {
          const payload = { id: user.id };
          const token = auth.issueToken(payload);
          response.status(201).json({ token });
        })
        .catch((reason) => {
          response.status(401).json({ message: reason.message });
        });
    } else {
      response.status(401).json({ message: 'Email or password not provided' });
    }
  },
};
