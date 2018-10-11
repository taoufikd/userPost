import {Comment} from  '../../lib/sequelize'
import {User} from  '../../lib/sequelize'
import {Post} from  '../../lib/sequelize'
export default {
    Query: {
      
    },
  
    Mutation: {
      commentPost: (root,args) =>
      Promise.all([
        User.findOne({ where: { id: args.userId }, include: ["posts"] }),
        Post.findOne({where:{id:args.postId},include:["user"]}),
        Comment.create(args)
      ]).then(([user, post,comment]) => ({
        ...comment.get(),
        user: user.get(),
        post:post.get()
      }))
  }
  }