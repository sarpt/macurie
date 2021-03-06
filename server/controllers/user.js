const models = require('../models');
const auth = require('../auth');

const User = models.User;

module.exports = {
  register(request, response) {
    const userInfo = request.body;
    User.register(models, userInfo)
      .then(user => response.status(201).send({ message: 'Registration successful' }))
      .catch(error => response.status(401).send({ message: error }));
  },
  login(request, response) {
    const payload = {};
    User.login(request.body)
      .then((user) => {
        payload.id = user.id;
        user.checkRole()
          .then((role) => {
            payload.role = { id: role.id, type: role.type };
            const token = auth.issueToken(payload);

            response.status(201).json({
              token,
              info: {
                id: user.id,
                nick: user.nick,
                name: user.name,
                surname: user.surname,
                email: user.email,
                address: user.address,
                role,
              },
            });
          });
      })
      .catch((reason) => {
        response.status(401).json({ message: reason });
      });
  },
  you(request, response) {
    const user = request.user;
    response.status(201).send({ user });
  },
  detail(request, response) {
    User.detail(request.params)
      .then(user => response.status(201).send({ user }))
      .catch(reason => response.status(401).send({ message: reason }));
  },
};
