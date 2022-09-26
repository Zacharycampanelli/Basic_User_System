const router = require('express').Router();
const { User } = require('../../models');

// GET all users
router.get('/', (req, res) => {
  User.findAll({
    attributes: { exclude: ['password'] },
  })
    .then((dbUserData) => res.json(dbUserData))
    .caatch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;