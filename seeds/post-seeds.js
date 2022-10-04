const { Post } = require('../models');

const postdata = [
  {
    title: 'This is a Title.',
    bodyText:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet consequatur qui adipisci, nesciunt maiores rem delectus nemo odit maxime laudantium voluptatem magnam a quas suscipit, dicta ea nulla blanditiis officiis?',
    photoUrl: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    userId: 10,
  },
  {
    title: 'This is a Title.',
    bodyText:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet consequatur qui adipisci, nesciunt maiores rem delectus nemo odit maxime laudantium voluptatem magnam a quas suscipit, dicta ea nulla blanditiis officiis?',
    photoUrl: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    userId: 10,
  },
  {
    title: 'This is a Title.',
    bodyText:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet consequatur qui adipisci, nesciunt maiores rem delectus nemo odit maxime laudantium voluptatem magnam a quas suscipit, dicta ea nulla blanditiis officiis?',
    photoUrl: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    userId: 2,
  },
  {
    title: 'This is a Title.',
    bodyText:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet consequatur qui adipisci, nesciunt maiores rem delectus nemo odit maxime laudantium voluptatem magnam a quas suscipit, dicta ea nulla blanditiis officiis?',
    photoUrl: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    userId: 1,
  },
  {
    title: 'This is a Title.',
    bodyText:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet consequatur qui adipisci, nesciunt maiores rem delectus nemo odit maxime laudantium voluptatem magnam a quas suscipit, dicta ea nulla blanditiis officiis?',
    photoUrl: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    userId: 3,
  },
  {
    title: 'This is a Title.',
    bodyText:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet consequatur qui adipisci, nesciunt maiores rem delectus nemo odit maxime laudantium voluptatem magnam a quas suscipit, dicta ea nulla blanditiis officiis?',
    photoUrl: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    userId: 4,
  },
  {
    title: 'This is a Title.',
    bodyText:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet consequatur qui adipisci, nesciunt maiores rem delectus nemo odit maxime laudantium voluptatem magnam a quas suscipit, dicta ea nulla blanditiis officiis?',
    photoUrl: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    userId: 4,
  },
  {
    title: 'This is a Title.',
    bodyText:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet consequatur qui adipisci, nesciunt maiores rem delectus nemo odit maxime laudantium voluptatem magnam a quas suscipit, dicta ea nulla blanditiis officiis?',
    photoUrl: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    userId: 6,
  },
  {
    title: 'This is a Title.',
    bodyText:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet consequatur qui adipisci, nesciunt maiores rem delectus nemo odit maxime laudantium voluptatem magnam a quas suscipit, dicta ea nulla blanditiis officiis?',
    photoUrl: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    userId: 6,
  },
  {
    title: 'This is a Title.',
    bodyText:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet consequatur qui adipisci, nesciunt maiores rem delectus nemo odit maxime laudantium voluptatem magnam a quas suscipit, dicta ea nulla blanditiis officiis?',
    photoUrl: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    userId: 9,
  },
  {
    title: 'This is a Title.',
    bodyText:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet consequatur qui adipisci, nesciunt maiores rem delectus nemo odit maxime laudantium voluptatem magnam a quas suscipit, dicta ea nulla blanditiis officiis?',
    photoUrl: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    userId: 4,
  },
  {
    title: 'This is a Title.',
    bodyText:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet consequatur qui adipisci, nesciunt maiores rem delectus nemo odit maxime laudantium voluptatem magnam a quas suscipit, dicta ea nulla blanditiis officiis?',
    photoUrl: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    userId: 8,
  },
  {
    title: 'This is a Title.',
    bodyText:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet consequatur qui adipisci, nesciunt maiores rem delectus nemo odit maxime laudantium voluptatem magnam a quas suscipit, dicta ea nulla blanditiis officiis?',
    photoUrl: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    userId: 3,
  },
  {
    title: 'This is a Title.',
    bodyText:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet consequatur qui adipisci, nesciunt maiores rem delectus nemo odit maxime laudantium voluptatem magnam a quas suscipit, dicta ea nulla blanditiis officiis?',
    photoUrl: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    userId: 1,
  },
  {
    title: 'This is a Title.',
    bodyText:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet consequatur qui adipisci, nesciunt maiores rem delectus nemo odit maxime laudantium voluptatem magnam a quas suscipit, dicta ea nulla blanditiis officiis?',
    photoUrl: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    userId: 4,
  },
  {
    title: 'This is a Title.',
    bodyText:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet consequatur qui adipisci, nesciunt maiores rem delectus nemo odit maxime laudantium voluptatem magnam a quas suscipit, dicta ea nulla blanditiis officiis?',
    photoUrl: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    userId: 6,
  },
  {
    title: 'This is a Title.',
    bodyText:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet consequatur qui adipisci, nesciunt maiores rem delectus nemo odit maxime laudantium voluptatem magnam a quas suscipit, dicta ea nulla blanditiis officiis?',
    photoUrl: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    userId: 7,
  },
  {
    title: 'This is a Title.',
    bodyText:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet consequatur qui adipisci, nesciunt maiores rem delectus nemo odit maxime laudantium voluptatem magnam a quas suscipit, dicta ea nulla blanditiis officiis?',
    photoUrl: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    userId: 8,
  },
  {
    title: 'This is a Title.',
    bodyText:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet consequatur qui adipisci, nesciunt maiores rem delectus nemo odit maxime laudantium voluptatem magnam a quas suscipit, dicta ea nulla blanditiis officiis?',
    photoUrl: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    userId: 9,
  },
  {
    title: 'This is a Title.',
    bodyText:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet consequatur qui adipisci, nesciunt maiores rem delectus nemo odit maxime laudantium voluptatem magnam a quas suscipit, dicta ea nulla blanditiis officiis?',
    photoUrl: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    userId: 7,
  },
  {
    title: 'This is a Title.',
    bodyText:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet consequatur qui adipisci, nesciunt maiores rem delectus nemo odit maxime laudantium voluptatem magnam a quas suscipit, dicta ea nulla blanditiis officiis?',
    photoUrl: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    userId: 2,
  },
  {
    title: 'This is a Title.',
    bodyText:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet consequatur qui adipisci, nesciunt maiores rem delectus nemo odit maxime laudantium voluptatem magnam a quas suscipit, dicta ea nulla blanditiis officiis?',
    photoUrl: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    userId: 7,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
