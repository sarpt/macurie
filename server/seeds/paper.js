const database = require('../models');

const Paper = database.Paper;

module.exports = () => {
  const allOperations = [];

  const jsConf1Paper = {
    title: 'The difference between jQuery and React',
    subject: 'Computer Science',
    summary: 'How a jQuery can become a leading framework after decimating React with innovative custom syntax for selectors and wonderfully terse callback chaining.',
  };
  allOperations.push(Paper.create(jsConf1Paper)
    .then((paper) => {
      paper.setConference(1);
      paper.setAuthor(2);
    }));

  const jsConf2Paper = {
    title: 'Teenagers and this binding',
    subject: 'Computer Science',
    summary: 'A revolutionary study explaining how teenagers have exactly the same problems understanding this binding as adults have. How is that so?',
  };
  allOperations.push(Paper.create(jsConf2Paper)
    .then((paper) => {
      paper.setConference(1);
      paper.setAuthor(1);
    }));

  const medConf1Paper = {
    title: 'Neural-based Aircraft Control Systems',
    subject: 'Biology',
    summary: 'Hands-free piloting - how blue-haired girl named Rena helped to revolutionize the Warfare.',
  };
  allOperations.push(Paper.create(medConf1Paper)
    .then((paper) => {
      paper.setConference(2);
      paper.setAuthor(2);
    }));

  const gesaConf1Paper = {
    title: 'Are blue hedghehogs connected to social impairment?',
    subject: 'Social studies',
    summary: 'Rings, sound-barrier & asperger syndrom - is it corelated?',
  };
  allOperations.push(Paper.create(gesaConf1Paper)
    .then((paper) => {
      paper.setConference(3);
      paper.setAuthor(1);
    }));

  return Promise.all(allOperations);
};
