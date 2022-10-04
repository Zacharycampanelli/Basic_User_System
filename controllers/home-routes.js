const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Post } = require('../models');

router.get('/', (req, res) => {
  Post.findAll({
    attributes: ['id', 'title', 'bodyText', 'photoUrl', 'created_at'],
    include: [
      {
        model: User,
        attributes: ['username'],
      }
    ]
  }).then(dbPostData => {
    const posts = dbPostData.map(post => post.get({ plain: true }));
    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
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
