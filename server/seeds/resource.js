const database = require('../models');

const Resource = database.Resource;

module.exports = () => {
  const allOperations = [];

  const jsConf1PaperResource1 = {
    filename: 'pdf1',
    revisionNumber: 1,
  };
  allOperations.push(Resource.create(jsConf1PaperResource1)
    .then((res) => {
      res.setReview(1);
      res.setPaper(1);
    }));

  const jsConf2PaperResource1 = {
    filename: 'pdf2',
    revisionNumber: 1,
  };
  allOperations.push(Resource.create(jsConf2PaperResource1)
    .then((res) => {
      res.setReview(2);
      res.setPaper(2);
    }));

  const medConf1PaperResource1 = {
    filename: 'pdf1',
    revisionNumber: 1,
  };
  allOperations.push(Resource.create(medConf1PaperResource1)
    .then((res) => {
      res.setReview(3);
      res.setPaper(3);
    }));

  const gesaConf1PaperResource1 = {
    filename: 'pdf2',
    revisionNumber: 1,
  };
  allOperations.push(Resource.create(gesaConf1PaperResource1)
    .then((res) => {
      res.setReview(4);
      res.setPaper(4);
    }));
  return Promise.all(allOperations);
};
