const db = require('../models');
const Person = db.people;
const Op = db.Sequelize.Op;

// Create and Save a new Person
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: 'Content can not be empty!',
    });
    return;
  }

  // Create a Person
  const person = {
    title: req.body.title,
    sex: req.body.sex,
    firstname: req.body.firstname,
    lastname: req.body.lastname,

    published: req.body.published ? req.body.published : false,
  };

  // Save Person in the database
  Person.create(person)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Person.',
      });
    });
};

// Retrieve all People from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Person.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving people.',
      });
    });
};

// Find a single Person with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Person.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: 'Error retrieving Person with id=' + id,
      });
    });
};

// Update a Person by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Person.update(req.body, {
    where: { id: id },
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: 'Person was updated successfully.',
        });
      } else {
        res.send({
          message: `Cannot update Person with id=${id}. Maybe Person was not found or req.body is empty!`,
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: 'Error updating Person with id=' + id,
      });
    });
};

// Delete a Person with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Person.destroy({
    where: { id: id },
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: 'Person was deleted successfully!',
        });
      } else {
        res.send({
          message: `Cannot delete Person with id=${id}. Maybe Person was not found!`,
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: 'Could not delete Person with id=' + id,
      });
    });
};

// Delete all People from the database.
exports.deleteAll = (req, res) => {
  Person.destroy({
    where: {},
    truncate: false,
  })
    .then(nums => {
      res.send({ message: `${nums} People were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while removing all people.',
      });
    });
};

// Find all published People
exports.findAllPublished = (req, res) => {
  Person.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving people.',
      });
    });
};
