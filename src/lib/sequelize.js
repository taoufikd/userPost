const Sequelize = require("sequelize");
const UserModel = require("../models/user");
const PostModel = require("../models/post");
const CommentModel = require("../models/comment");
import config from "../config";

const sequelize = new Sequelize(
  config.server.database.name,
  config.server.database.username,
  config.server.database.password,
  {
    host: config.server.database.host,
    dialect: "mysql",
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

const User = UserModel(sequelize, Sequelize);

const Post = PostModel(sequelize, Sequelize);
const Comment = CommentModel(sequelize, Sequelize);

Post.belongsTo(User);
User.hasMany(Post,{ onDelete: 'CASCADE' });
Post.hasMany(Comment,{ onDelete: 'CASCADE' });
Comment.belongsTo(User);
Comment.belongsTo(Post);

sequelize.sync().then(() => {
  console.log(`Database & tables created!`);
});

module.exports = {
  User,
  Post,
  Comment
};
