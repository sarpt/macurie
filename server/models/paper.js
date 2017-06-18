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
      add: (models, paper) => {
        const paperInstance = {
          title: paper.title,
          subject: paper.subject,
          summary: paper.summary,
          revisions: {
            filename: paper.filename,
            revisionNumber: 1,
          },
        };
        const paperOptions = {
          include: [{
            model: models.Resource,
            as: 'revisions',
          }],
        };
        return Paper.create(paperInstance, paperOptions)
          .then((newPaper) => {
            newPaper.setConference(paper.conferenceId);
            newPaper.setAuthor(paper.authorId);
            return Promise.resolve();
          });
      },
      listByConference: (models, paperInfo) => {
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
      detail: (models, paperInfo) => {
        const paperId = paperInfo.paperId;
        if (!paperId) {
          return Promise.reject('Paper Id not provided');
        }

        return Paper.findOne({
          where: { id: paperId },
          include: [
            {
              model: models.Resource,
              as: 'revisions',
            },
            {
              model: models.Author,
              include: [{
                model: models.User,
              }],
            }
          ]
        })
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
