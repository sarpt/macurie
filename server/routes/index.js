const userRoutes = require('./user');

module.exports = (app) => {
  userRoutes(app);

  app.get('/api', (request, response) => {
    response.status(200).send({
      message: 'Welcome to Macurie API',
    });
  });

  app.get('*', (request, response) => {
    response.status(200).send({ message: 'Sup fool' });
  });
};
