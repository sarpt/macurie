const userController = require('../controllers/user');

module.exports = (app) => {
  app.post('/api/user/register', userController.register);
  app.post('/api/user/login', userController.login);
};
