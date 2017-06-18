module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    nick: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.ENUM('unregistered', 'registered'),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salt: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    classMethods: {
      associate: (models) => {
        User.hasOne(models.Author, {
          foreignKey: 'userId',
          as: 'author',
        });
        User.hasOne(models.Reviewer, {
          foreignKey: 'userId',
          as: 'reviewer',
        });
        User.hasOne(models.EventAdministrator, {
          foreignKey: 'userId',
          as: 'eventAdministrator',
        });
      },
      // in order to preserve separation of concernes, models are injected by controller
      register: (models, user) => {
        return User.findOne({ where: { email: user.email } })
          .then((foundUser) => {
            if (foundUser) {
              return Promise.reject('Provided email is already present in the system');
            }

            const salt = 'salt';
            const password = user.password;
            const userInstance = {
              nick: user.nick,
              name: user.name,
              surname: user.surname,
              email: user.email,
              address: user.address,
              state: 'unregistered',
              salt: salt,
              password: password,
            };
            const creationOptions = { include: [] };

            if (user.role === 'author') {
              userInstance.author = {};
              creationOptions.include.push({
                model: models.Author,
                as: 'author',
              });
            } else if (user.role === 'reviewer') {
              userInstance.reviewer = {};
              creationOptions.include.push({
                model: models.Reviewer,
                as: 'reviewer',
              });
            } else if (user.role === 'administrator') {
              userInstance.eventAdministrator = {};
              creationOptions.include.push({
                model: models.EventAdministrator,
                as: 'eventAdministrator',
              });
            } else if (user.role !== 'regular') {
              return Promise.reject('Wrong role');
            }
            return User.create(userInstance, creationOptions);
          });
      },
      login: (userInfo) => {
        if (!userInfo.email || !userInfo.password) {
          return Promise.reject('Email or password not provided');
        }

        const email = userInfo.email;
        const password = userInfo.password;

        return User.findOne({ where: { email } })
          .then((user) => {
            if (!user) {
              return Promise.reject('User not found');
            } else if (user.password !== password) {
              return Promise.reject('Wrong password');
            }
            return user;
          });
      },
    },
    instanceMethods: {
      checkRole: function () {
        const roles = {};
        return this.getAuthor()
          .then((author) => {
            if (author) {
              roles.author = {
                id: author.id,
                type: 'author',
              };
            }
            return this.getReviewer();
          })
          .then((reviewer) => {
            if (reviewer) {
              roles.reviewer = {
                id: reviewer.id,
                type: 'reviewer',
              };
            }
            return this.getEventAdministrator();
          })
          .then((eventAdministrator) => {
            if (eventAdministrator) {
              roles.eventAdministrator = {
                id: eventAdministrator.id,
                type: 'eventAdministrator',
              };
            }
            return Promise.resolve();
          })
          .then(() => {
            if (roles.author) {
              return roles.author;
            } else if (roles.reviewer) {
              return roles.reviewer;
            } else if (roles.eventAdministrator) {
              return roles.eventAdministrator;
            }
            return { id: this.id, type: 'regular' };
          });
      },
    },
  });
  return User;
};
