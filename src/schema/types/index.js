import user from "./user";
import post from "./post";
import comment from "./comment"
import queries from "./queries";

// export default `
//   type User {
//     id: ID!
//     firstName: String!
//     lastName: String!
//     posts: [Post!]!
//   }
//   type Post {
//     id: ID!
//     title: String
//     content: String!
//     user: User!
//     comments: [Comment]
//   }
//   type Comment {
//     id: ID
//     description: String
//     post: Post
//     user: User
//   }
//   type Query {
//     posts: [Post!]!
//     post(id: ID!): Post
  
//   }
//   type Mutation {
//     createPost(title: String, content:String, userId: ID): Post
//     commentPost(description: String, postId: ID, userId: ID): Comment
//     createUser(lastname:String!,firstname:String!):User
//   }
// `;
export default [user,post,comment,queries].join("\n")