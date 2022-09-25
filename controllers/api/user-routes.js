const router = require('express').Router();
const { User } = require('../../models');

// GET all users
router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
    })
    .then(dbUserData) {
        if(!dbUserData) {
            res.status(404).json({ message: 'No user found with this id '})
            return;
        }
    }

})