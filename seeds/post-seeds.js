const { Post } = require('../models');

const postdata = [
  {
    title: 'This is a Title.',
    bodyText:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet consequatur qui adipisci, nesciunt maiores rem delectus nemo odit maxime laudantium voluptatem magnam a quas suscipit, dicta ea nulla blanditiis officiis?',
    photoUrl:
      'https://imageio.forbes.com/specials-images/imageserve/61d52d4e3a76ed81ac034ea8/The-10-Tech-Trends-That-Will-Transform-Our-World/960x0.jpg?format=jpg&width=960',
    userId: 10,
  },
  {
    title: 'This is a Title.',
    bodyText:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet consequatur qui adipisci, nesciunt maiores rem delectus nemo odit maxime laudantium voluptatem magnam a quas suscipit, dicta ea nulla blanditiis officiis?',
    photoUrl:
      'https://imageio.forbes.com/specials-images/imageserve/61d52d4e3a76ed81ac034ea8/The-10-Tech-Trends-That-Will-Transform-Our-World/960x0.jpg?format=jpg&width=960',
    userId: 10,
  },
  {
    title: 'This is a Title.',
    bodyText:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet consequatur qui adipisci, nesciunt maiores rem delectus nemo odit maxime laudantium voluptatem magnam a quas suscipit, dicta ea nulla blanditiis officiis?',
    photoUrl:
      'https://imageio.forbes.com/specials-images/imageserve/61d52d4e3a76ed81ac034ea8/The-10-Tech-Trends-That-Will-Transform-Our-World/960x0.jpg?format=jpg&width=960',
    userId: 2,
  },
  {
    title: 'This is a Title.',
    bodyText:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet consequatur qui adipisci, nesciunt maiores rem delectus nemo odit maxime laudantium voluptatem magnam a quas suscipit, dicta ea nulla blanditiis officiis?',
    photoUrl:
      'https://imageio.forbes.com/specials-images/imageserve/61d52d4e3a76ed81ac034ea8/The-10-Tech-Trends-That-Will-Transform-Our-World/960x0.jpg?format=jpg&width=960',
    userId: 1,
  },
  {
    title: 'This is a Title.',
    bodyText:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet consequatur qui adipisci, nesciunt maiores rem delectus nemo odit maxime laudantium voluptatem magnam a quas suscipit, dicta ea nulla blanditiis officiis?',
    photoUrl:
      'https://imageio.forbes.com/specials-images/imageserve/61d52d4e3a76ed81ac034ea8/The-10-Tech-Trends-That-Will-Transform-Our-World/960x0.jpg?format=jpg&width=960',
    userId: 3,
  },
  {
    title: 'This is a Title.',
    bodyText:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet consequatur qui adipisci, nesciunt maiores rem delectus nemo odit maxime laudantium voluptatem magnam a quas suscipit, dicta ea nulla blanditiis officiis?',
    photoUrl:
      'https://imageio.forbes.com/specials-images/imageserve/61d52d4e3a76ed81ac034ea8/The-10-Tech-Trends-That-Will-Transform-Our-World/960x0.jpg?format=jpg&width=960',
    userId: 4,
  },
  {
    title: 'This is a Title.',
    bodyText:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet consequatur qui adipisci, nesciunt maiores rem delectus nemo odit maxime laudantium voluptatem magnam a quas suscipit, dicta ea nulla blanditiis officiis?',
    photoUrl:
      'https://imageio.forbes.com/specials-images/imageserve/61d52d4e3a76ed81ac034ea8/The-10-Tech-Trends-That-Will-Transform-Our-World/960x0.jpg?format=jpg&width=960',
    userId: 4,
  },
  {
    title: 'This is a Title.',
    bodyText:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet consequatur qui adipisci, nesciunt maiores rem delectus nemo odit maxime laudantium voluptatem magnam a quas suscipit, dicta ea nulla blanditiis officiis?',
    photoUrl:
      'https://imageio.forbes.com/specials-images/imageserve/61d52d4e3a76ed81ac034ea8/The-10-Tech-Trends-That-Will-Transform-Our-World/960x0.jpg?format=jpg&width=960',
    userId: 6,
  },
  {
    title: 'This is a Title.',
    bodyText:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet consequatur qui adipisci, nesciunt maiores rem delectus nemo odit maxime laudantium voluptatem magnam a quas suscipit, dicta ea nulla blanditiis officiis?',
    photoUrl:
      'https://imageio.forbes.com/specials-images/imageserve/61d52d4e3a76ed81ac034ea8/The-10-Tech-Trends-That-Will-Transform-Our-World/960x0.jpg?format=jpg&width=960',
    userId: 6,
  },
  {
    title: 'This is a Title.',
    bodyText:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet consequatur qui adipisci, nesciunt maiores rem delectus nemo odit maxime laudantium voluptatem magnam a quas suscipit, dicta ea nulla blanditiis officiis?',
    photoUrl:
      'https://imageio.forbes.com/specials-images/imageserve/61d52d4e3a76ed81ac034ea8/The-10-Tech-Trends-That-Will-Transform-Our-World/960x0.jpg?format=jpg&width=960',
    userId: 9,
  },
  {
    title: 'This is a Title.',
    bodyText:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet consequatur qui adipisci, nesciunt maiores rem delectus nemo odit maxime laudantium voluptatem magnam a quas suscipit, dicta ea nulla blanditiis officiis?',
    photoUrl:
      'https://imageio.forbes.com/specials-images/imageserve/61d52d4e3a76ed81ac034ea8/The-10-Tech-Trends-That-Will-Transform-Our-World/960x0.jpg?format=jpg&width=960',
    userId: 4,
  },
  {
    title: 'This is a Title.',
    bodyText:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet consequatur qui adipisci, nesciunt maiores rem delectus nemo odit maxime laudantium voluptatem magnam a quas suscipit, dicta ea nulla blanditiis officiis?',
    photoUrl:
      'https://imageio.forbes.com/specials-images/imageserve/61d52d4e3a76ed81ac034ea8/The-10-Tech-Trends-That-Will-Transform-Our-World/960x0.jpg?format=jpg&width=960',
    userId: 8,
  },
  {
    title: 'This is a Title.',
    bodyText:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet consequatur qui adipisci, nesciunt maiores rem delectus nemo odit maxime laudantium voluptatem magnam a quas suscipit, dicta ea nulla blanditiis officiis?',
    photoUrl:
      'https://imageio.forbes.com/specials-images/imageserve/61d52d4e3a76ed81ac034ea8/The-10-Tech-Trends-That-Will-Transform-Our-World/960x0.jpg?format=jpg&width=960',
    userId: 3,
  },
  {
    title: 'This is a Title.',
    bodyText:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet consequatur qui adipisci, nesciunt maiores rem delectus nemo odit maxime laudantium voluptatem magnam a quas suscipit, dicta ea nulla blanditiis officiis?',
    photoUrl:
      'https://imageio.forbes.com/specials-images/imageserve/61d52d4e3a76ed81ac034ea8/The-10-Tech-Trends-That-Will-Transform-Our-World/960x0.jpg?format=jpg&width=960',
    userId: 1,
  },
  {
    title: 'This is a Title.',
    bodyText:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet consequatur qui adipisci, nesciunt maiores rem delectus nemo odit maxime laudantium voluptatem magnam a quas suscipit, dicta ea nulla blanditiis officiis?',
    photoUrl:
      'https://imageio.forbes.com/specials-images/imageserve/61d52d4e3a76ed81ac034ea8/The-10-Tech-Trends-That-Will-Transform-Our-World/960x0.jpg?format=jpg&width=960',
    userId: 4,
  },
  {
    title: 'This is a Title.',
    bodyText:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet consequatur qui adipisci, nesciunt maiores rem delectus nemo odit maxime laudantium voluptatem magnam a quas suscipit, dicta ea nulla blanditiis officiis?',
    photoUrl:
      'https://imageio.forbes.com/specials-images/imageserve/61d52d4e3a76ed81ac034ea8/The-10-Tech-Trends-That-Will-Transform-Our-World/960x0.jpg?format=jpg&width=960',
    userId: 6,
  },
  {
    title: 'This is a Title.',
    bodyText:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet consequatur qui adipisci, nesciunt maiores rem delectus nemo odit maxime laudantium voluptatem magnam a quas suscipit, dicta ea nulla blanditiis officiis?',
    photoUrl:
      'https://imageio.forbes.com/specials-images/imageserve/61d52d4e3a76ed81ac034ea8/The-10-Tech-Trends-That-Will-Transform-Our-World/960x0.jpg?format=jpg&width=960',
    userId: 7,
  },
  {
    title: 'This is a Title.',
    bodyText:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet consequatur qui adipisci, nesciunt maiores rem delectus nemo odit maxime laudantium voluptatem magnam a quas suscipit, dicta ea nulla blanditiis officiis?',
    photoUrl:
      'https://imageio.forbes.com/specials-images/imageserve/61d52d4e3a76ed81ac034ea8/The-10-Tech-Trends-That-Will-Transform-Our-World/960x0.jpg?format=jpg&width=960',
    userId: 8,
  },
  {
    title: 'This is a Title.',
    bodyText:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet consequatur qui adipisci, nesciunt maiores rem delectus nemo odit maxime laudantium voluptatem magnam a quas suscipit, dicta ea nulla blanditiis officiis?',
    photoUrl:
      'https://imageio.forbes.com/specials-images/imageserve/61d52d4e3a76ed81ac034ea8/The-10-Tech-Trends-That-Will-Transform-Our-World/960x0.jpg?format=jpg&width=960',
    userId: 9,
  },
  {
    title: 'This is a Title.',
    bodyText:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet consequatur qui adipisci, nesciunt maiores rem delectus nemo odit maxime laudantium voluptatem magnam a quas suscipit, dicta ea nulla blanditiis officiis?',
    photoUrl:
      'https://imageio.forbes.com/specials-images/imageserve/61d52d4e3a76ed81ac034ea8/The-10-Tech-Trends-That-Will-Transform-Our-World/960x0.jpg?format=jpg&width=960',
    userId: 7,
  },
  {
    title: 'This is a Title.',
    bodyText:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet consequatur qui adipisci, nesciunt maiores rem delectus nemo odit maxime laudantium voluptatem magnam a quas suscipit, dicta ea nulla blanditiis officiis?',
    photoUrl:
      'https://imageio.forbes.com/specials-images/imageserve/61d52d4e3a76ed81ac034ea8/The-10-Tech-Trends-That-Will-Transform-Our-World/960x0.jpg?format=jpg&width=960',
    userId: 2,
  },
  {
    title: 'This is a Title.',
    bodyText:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet consequatur qui adipisci, nesciunt maiores rem delectus nemo odit maxime laudantium voluptatem magnam a quas suscipit, dicta ea nulla blanditiis officiis?',
    photoUrl:
      'https://imageio.forbes.com/specials-images/imageserve/61d52d4e3a76ed81ac034ea8/The-10-Tech-Trends-That-Will-Transform-Our-World/960x0.jpg?format=jpg&width=960',
    userId: 7,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
