/*
  rebuilds the database from scratch, seeding it with basic data in the process
  an easier and faster method for developement purposes
  main doesn't have to bother with .sync (as it shouldn't have in the first place)
*/

const database = require('./models');
const seeds = require('./seeds');

database.sequelize.sync({ force: true }).then(() => {
  seeds.userSeeds()
    .then(() => seeds.conferenceSeeds())
    .then(() => seeds.reviewSeeds())
    .then(() => seeds.paperSeeds())
    .then(() => seeds.resourceSeeds())
    .catch((error) => {
      console.log(error);
    });
});
