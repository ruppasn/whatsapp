import { gql } from 'apollo-server-express'

// Construct a schema, using GraphQL schema language
const typeDefs = gql`

  type Chat {
    image: String
    name: String
    lastMessage: String
    dateTime: String
  }

  type Status {
    image: String
    name: String
    dateTime: String
  }
  
  type Call {
    image: String
    name: String
    dateTime: String
    type: String
  }


  type Query {
    chats: [Chat]
    calls: [Call]
    status: [Status]
  }
`;

export default typeDefs
