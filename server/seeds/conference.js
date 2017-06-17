const database = require('../models');

const Conference = database.Conference;

module.exports = () => {
  const allOperations = [];

  const firstConference = {
    name: 'JSConf 17',
    description: 'A conference for all things JS. Is jQuery a new React? Why Andi Ozmany isn\'t using Util.promisify? Why NaN === NaN isn\'t undefined? Im 12 and what is this? Learn with us at JSConf.',
    date: new Date(),
    ticketFee: 17.5,
    domain: 'business',
    state: 'registered',
  };
  allOperations.push(Conference.create(firstConference)
    .then((conf) => {
      conf.setEventAdministrator(1);
    }));

  const secondConference = {
    name: 'MedConf',
    description: 'New advancements in medical sciences, including neural-based Aircraft Control Systems - sponsored by National University of OSEA.',
    date: new Date(),
    ticketFee: 0,
    domain: 'scientific',
    state: 'registered',
  };
  allOperations.push(Conference.create(secondConference)
    .then((conf) => {
      conf.setEventAdministrator(1);
    }));

  const thirdConference = {
    name: 'GESA Conf 17',
    description: 'Is a blue hedghehog a future of AGES? Discover the phenomenon with us @ a biggest GESA corporation conference.',
    date: new Date(),
    ticketFee: 100,
    domain: 'corporate',
    state: 'registered',
  };
  allOperations.push(Conference.create(thirdConference)
    .then((conf) => {
      conf.setEventAdministrator(1);
    }));

  return Promise.all(allOperations);
};
