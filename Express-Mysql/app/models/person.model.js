module.exports = (sequelize, Sequelize) => {
  const Person = sequelize.define('person', {
    title: {
      type: Sequelize.STRING,
    },
    sex: {
      type: Sequelize.STRING,
    },
    firstname: {
      type: Sequelize.STRING,
    },
    lastname: {
      type: Sequelize.STRING,
    },
    published: {
      type: Sequelize.BOOLEAN,
    },
  });

  return Person;
};
