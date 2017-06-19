const userController = require('../controllers/user');
const auth = require('../auth');

module.exports = (app) => {
  app.post('/api/user/register', userController.register);
  app.post('/api/user/login', userController.login);
  app.get('/api/user/you', auth.authenticate, userController.you);
  app.get('/api/user/detail/:id', userController.detail);
};
