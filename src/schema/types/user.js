export default `
  type User {
    id: ID!
    firstname: String
    lastname: String
    posts: [Post]
  }
  `