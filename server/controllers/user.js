const models = require('../models');
const auth = require('../auth');

const User = models.User;

module.exports = {
  register(request, response) {
    const userInfo = request.body;
    User.register(models, userInfo)
      .then(user => response.status(201).send(user))
      .catch(error => response.status(401).send(error));
  },
  login(request, response) {
    User.login(request.body)
      .then((user) => {
        const payload = { id: user.id };
        const token = auth.issueToken(payload);
        response.status(201).json({ token });
      })
      .catch((reason) => {
        response.status(401).json({ message: reason });
      });
  },
  you(request, response) {

  },
};
