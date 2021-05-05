module.exports = (sequelize, Sequelize) => {
  const Person = sequelize.define('person', {
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    published: {
      type: Sequelize.BOOLEAN,
    },
  });

  return Person;
};
