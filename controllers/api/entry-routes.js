const router = require('express').Router();
const { User, Entry } = require('../../models');
const sequelize = require('../../config/connection');
// const authorized = require('../../utils/authorized');

// GET /api/entries
// Retrieves all of the user's saved notes
router.get('/', (req, res) => {
  Entry.findAll({
    attributes: ['id', 'title', 'bodyText'],
    order: [['createdAt', 'DESC']],
  })
    .then((dbEntryData) => res.json(dbEntryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET /api/entries/:id
// Retrieves a single saved note
router.get('/:id', (req, res) => {
  Entry.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ['id', 'title', 'bodyText'],
  })
    .then((dbEntryData) => {
      if (!dbEntryData) {
        res.status(404).json({ message: 'No entry found!' });
        return;
      }
      res.json(dbEntryData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// POST /api/entries
// Creates a new note page
router.post('/', (req, res) => {
  Entry.create({
    title: req.body.title,
    bodyText: req.body.bodyText,
  })
    .then((dbEntryData) => res.json(dbEntryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// PUT /api/entries/:id
router.put('/:id', (req, res) => {
  Entry.update(
    {
      title: req.body.title,
      bodyText: req.body.bodyText,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbEntryData) => {
      if (!dbEntryData) {
        res.status(404).json({ message: 'No entry found!' });
        return;
      }
      res.json(dbEntryData);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// Delete /api/entries/:id
router.delete('/:id', (req, res) => {
    Entry.destroy({
        where: {
            id: req.params.id,
        }
    })
    .then((dbEntryData) => {
        if (!dbEntryData) {
          res.status(404).json({ message: 'No entry found!' });
          return;
        }
        res.json(dbEntryData);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
})

module.exports = router;
