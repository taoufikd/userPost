export default `type Post {
    id: ID!
    title: String
    content: String!
    user: User
    comments: [Comment]
  }`