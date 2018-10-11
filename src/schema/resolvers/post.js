import { Post } from "../../lib/sequelize";
import { User } from "../../lib/sequelize";
import { Comment } from "../../lib/sequelize";
export default {
  Query: {
    post: (root, { id }) =>
      Post.findOne({ where: { id }, include: ["user", "comments"] }),
    posts: (root,{limit,offset}) => Post.all({ include: ["user", "comments"],limit,offset })
  },

  Mutation: {
    createPost: (parent, args) =>
      Promise.all([
        User.findOne({ where: { id: args.userId }, include: ["posts"] }),
        Post.create(args)]).then(
        ([user, post]) => ({
          ...post.get(),
          user: user.get()
        })
      )
  }
};
