import comment from "./comment";
import post from "./post";

export default {
  Query: {
    ...comment.Query,
    ...post.Query
  },
  Mutation: {
    ...comment.Mutation,
    ...post.Mutation
  }
};
