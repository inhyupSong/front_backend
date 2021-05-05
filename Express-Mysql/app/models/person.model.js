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
    street: {
      type: Sequelize.STRING,
    },
    house_nr: {
      type: Sequelize.STRING,
    },
    region: {
      type: Sequelize.STRING,
    },
    post_nr: {
      type: Sequelize.STRING,
    },
    state: {
      type: Sequelize.STRING,
    },
    country: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    phone_nr: {
      type: Sequelize.STRING,
    },
    mobile_nr: {
      type: Sequelize.STRING,
    },
    extra_infos: {
      type: Sequelize.STRING,
    },


    published: {
      type: Sequelize.BOOLEAN,
    },
  });

  return Person;
};
