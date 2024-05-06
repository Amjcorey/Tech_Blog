const User = require('./User');
const BlogPost = require('./blogPosts');
const Comment = require('./Comment');

// Sets up relationship between tables
// allows admin to inivite them using Sequelize
User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

BlogPost.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

Comment.belongsTo(BlogPost, {
  foreignKey: 'blogPost_id',
  onDelete: 'CASCADE',
});

BlogPost.hasMany(Comment, {
  foreignKey: 'blogPost_id',
  onDelete: 'CASCADE',
});

module.exports = { User, BlogPost, Comment };
