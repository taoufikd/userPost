import { Post } from "../../lib/sequelize";
import { User } from "../../lib/sequelize";
import { Comment } from "../../lib/sequelize";
export default {
  Query: {
    post: async (root, { id }) => {
      return await Post.findById(id, { include: [{ all: true, nested: true }] });
    },

    posts: async (root, { limit, offset }) => {
      return await Post.findAll({ include:[{ all: true, nested: true }], limit, offset });
    }
  },

  Mutation: {
    createPost: (parent, args) =>
      Promise.all([
        User.findOne({ where: { id: args.userId }, include:[{ all: true, nested: true }] }),
        Post.create(args)
      ]).then(([user, post]) => ({
        ...post.get(),
        user: user.get()
      }))
  },
  Post: {
    user: async (post, args) => {
      return await User.findById(post.userId,{include:[{ all: true, nested: true }]});
    }
  }
};
