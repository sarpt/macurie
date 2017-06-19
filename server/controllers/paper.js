const models = require('../models');

const Paper = models.Paper;

module.exports = {
  add: (request, response) => {
    const paperInfo = request.body;
    Paper.add(models, paperInfo)
      .then(result => response.status(201).send({ message: 'Paper upload successful' }))
      .catch(error => response.status(401).send({ message: error }));
  },
  listByConference: (request, response) => {
    Paper.listByConference(models, request.params)
      .then(papers => response.status(201).send({ papers }))
      .catch(error => response.status(401).send({ message: error }));
  },
  listByAuthor: (request, response) => {
    Paper.listByAuthor(request.params)
      .then(papers => response.status(201).send({ papers }))
      .catch(error => response.status(401).send({ message: error }));
  },
  detail: (request, response) => {
    Paper.detail(models, request.params)
      .then(paper => response.status(201).send({ paper }))
      .catch(error => response.status(401).send({ message: error }));
  },
};
