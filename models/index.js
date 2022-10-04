const User = require('./User');
const Post = require('./Post');

User.hasMany(Post, {
    foreignKey: 'userId'
});

Post.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'SET NULL'
})

module.exports = { User, Post };
