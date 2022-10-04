const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Post } = require('../models');

router.get('/', (req, res) => {
  Post.findAll({
    attributes: [
      'id', 'title','bodyText', 'photoUrl',
    ],
    include: [
      {
        model: User,
        attributes: 'username'
      }
    ]
  })
  .then(dbPostData => {
    if(!dbPostData) {
      res.status(404).json({ message: 'No post found with this id!'})
      return;
    }
    res.json(dbUserData);
})

   
  res.render('homepage', {
    loggedIn: req.session.loggedIn,
  });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

// router.get('/:id')

module.exports = router;
