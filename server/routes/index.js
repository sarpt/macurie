const userRoutes = require('./user');

module.exports = (app) => {
  userRoutes(app);

  app.get('/api/*', (request, response) => {
    response.status(200).send({
      message: 'Welcome to Macurie API. Please remember that you need a valid token obtained from a POST request to "/api/user/login" to access most of the API functionality.',
    });
  });

  app.get('*', (request, response) => {
    response.redirect('/');
  });
};
