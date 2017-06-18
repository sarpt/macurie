const models = require('../models');

const Paper = models.Paper;

module.exports = {
  add: (request, response) => {

  },
  listByConference: (request, response) => {
    Paper.listByConference(request.params)
      .then(papers => response.status(201).send({ papers }))
      .catch(error => response.status(401).send({ message: error }));
  },
  listByAuthor: (request, response) => {
    Paper.listByAuthor(request.params)
      .then(papers => response.status(201).send({ papers }))
      .catch(error => response.status(401).send({ message: error }));
  },
  detail: (request, response) => {
    Paper.detail(request.params)
      .then(paper => response.status(201).send({ paper }))
      .catch(error => response.status(401).send({ message: error }));
  },
};
