const userRoutes = require('./user');
const conferenceRoutes = require('./conference');
const paperRoutes = require('./paper');
const reviewRoutes = require('./review');

module.exports = (app) => {
  userRoutes(app);
  conferenceRoutes(app);
  paperRoutes(app);
  reviewRoutes(app);

  app.get('/api/*', (request, response) => {
    response.status(200).send({
      message: 'Welcome to Macurie API. Please remember that you need a valid token obtained from a POST request to "/api/user/login" to access most of the API functionality.',
    });
  });

  app.get('*', (request, response) => {
    response.redirect('/');
  });
};
