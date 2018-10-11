export default `type Query {
    posts(limit:Int,offset:Int): [Post!]
    post(id: ID!): Post
  
  }
  type Mutation {
    createPost(title: String, content:String, userId: ID): Post
    commentPost(description: String, postId: ID, userId: ID): Comment
   
  }
`