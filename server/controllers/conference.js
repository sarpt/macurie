const models = require('../models');

const Conference = models.Conference;

module.exports = {
  list: (request, response) => {
    Conference.list()
      .then(conferences => response.status(201).send({ conferences }))
      .catch(error => response.status(401).send({ message: error }));
  },
  detail: (request, response) => {
    Conference.detail(request.params)
      .then(conference => response.status(201).send({ conference }))
      .catch(error => response.status(401).send({ message: error }));
  },
};
