const database = require('../models');

const User = database.User;
const Author = database.Author;
const Reviewer = database.Reviewer;
const EventAdministrator = database.EventAdministrator;

module.exports = () => {
  const allOperations = [];

  const regularUser = {
    nick: 'mike',
    name: 'Michal',
    surname: 'Mich',
    email: 'mike@noop',
    address: '3rd street',
    state: 'registered',
    salt: 'salt1',
    password: 'password1',
  };
  allOperations.push(User.create(regularUser));

  const authorUser = {
    nick: 'john',
    name: 'Johnattan',
    surname: 'Whoop',
    email: 'john@noop',
    address: '3rd avenue',
    state: 'registered',
    salt: 'salt2',
    password: 'password2',
    author: {},
  };
  allOperations.push(User.create(authorUser, {
    include: {
      model: Author,
      as: 'author',
    },
  }));

  const author2User = {
    nick: 'alice',
    name: 'Alice',
    surname: 'Wonderland',
    email: 'aw@noop',
    address: 'That hole',
    state: 'registered',
    salt: 'salt2',
    password: 'password2',
    author: {},
  };
  allOperations.push(User.create(author2User, {
    include: {
      model: Author,
      as: 'author',
    },
  }));

  const reviewerUser = {
    nick: 'efe',
    name: 'Matthias',
    surname: 'Ekorn',
    email: 'efe@noop',
    address: '5th Alley',
    state: 'registered',
    salt: 'salt3',
    password: 'password3',
    reviewer: {},
  };
  allOperations.push(User.create(reviewerUser, {
    include: {
      model: Reviewer,
      as: 'reviewer',
    },
  }));

  const eventAdminUser = {
    nick: 'itzyaboi',
    name: 'George',
    surname: 'Fatank',
    email: 'filth@noop',
    address: 'NYC',
    state: 'registered',
    salt: 'salt4',
    password: 'password4',
    eventAdministrator: {},
  };
  allOperations.push(User.create(eventAdminUser, {
    include: {
      model: EventAdministrator,
      as: 'eventAdministrator',
    },
  }));

  return Promise.all(allOperations);
};
