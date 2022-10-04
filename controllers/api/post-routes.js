const router = require('express').Router();
const { User, Post } = require('../../models');
const sequelize = require('../../config/connection');
const authorized = require('../../utils/authorized');

// GET /api/entries
// Retrieves all of the user's saved notes
router.get('/', (req, res) => {
  Post.findAll({
    attributes: ['id', 'title', 'bodyText', 'photoUrl', 'userId'],
    order: [['createdAt', 'DESC']],
    include: {
      model: User,
      attributes: ['username']
    }
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/entries/:id
// Retrieves a single saved note
router.get('/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ['id', 'title', 'bodyText', 'photoUrl', 'userId'],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found!' });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// POST /api/posts
// Creates a new note page
router.post('/', authorized, (req, res) => {
  Post.create({
    title: req.body.title,
    bodyText: req.body.bodyText,
    photoUrl: req.body.photoUrl,
    userId: req.session.userId
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// PUT /api/entries/:id
router.put('/:id', authorized, (req, res) => {
  Post.update(
    {
      title: req.body.title,
      bodyText: req.body.bodyText,
      photoUrl: req.body.photoUrl,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found!' });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// Delete /api/entries/:id
router.delete('/:id', authorized, (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found!' });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
