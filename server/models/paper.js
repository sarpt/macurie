module.exports = (sequelize, DataTypes) => {
  const Paper = sequelize.define('Paper', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    classMethods: {
      associate: (models) => {
        Paper.belongsTo(models.Author, {
          foreignKey: 'authorId',
          onDelete: 'CASCADE',
        });
        Paper.belongsTo(models.Conference, {
          foreignKey: 'conferenceId',
          onDelete: 'CASCADE',
        });
        Paper.belongsTo(models.Review, {
          foreignKey: 'reviewId',
          onDelete: 'CASCADE',
        });
        Paper.hasMany(models.Resource, {
          foreignKey: 'paperId',
          as: 'revisions',
        });
      },
      add: () => {

      },
      listByConference: (paperInfo) => {
        const conferenceId = paperInfo.conferenceId;
        if (!conferenceId) {
          return Promise.reject('Conference Id not provided');
        }

        return Paper.findAll({
          where: { conferenceId },
        }).then((papers) => {
          if (!papers || papers.length === 0) {
            Promise.reject(`No papers for conferenceId=${conferenceId}`);
          }
          return papers;
        });
      },
      listByAuthor: (paperInfo) => {
        const authorId = paperInfo.authorId;
        if (!authorId) {
          return Promise.reject('Author Id not provided');
        }

        return Paper.findAll({
          where: { authorId },
        }).then((papers) => {
          if (!papers || papers.length === 0) {
            Promise.reject(`No papers for authorId=${authorId}`);
          }
          return papers;
        });
      },
      detail: (paperInfo) => {
        const paperId = paperInfo.paperId;
        if (!paperId) {
          return Promise.reject('Paper Id not provided');
        }

        return Paper.findById(paperId)
          .then((paper) => {
            if (!paper) {
              return Promise.reject(`Paper with paperId=${paperId} does not exists`);
            }
            return paper;
          });
      },
    },
  });
  return Paper;
};
