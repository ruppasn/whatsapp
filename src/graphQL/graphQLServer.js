const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')
const cors = require('cors');

var corsOptions = {
  origin: "http://localhost:3000",
};

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

const mockData = {
  "chats": [
      {
          "image": "satya.jpg",
          "name": "satya",
          "lastMessage": "ok. good bye",
          "dateTime": "31/12/2019"
      },
      {
          "image": "juily.jpg",
          "name": "juily",
          "lastMessage": "favicon Location",
          "dateTime": "12:41"
      },
      {
          "image": "rushi.jpg",
          "name": "Rushi",
          "lastMessage": "simly emoji :) :) ",
          "dateTime": "yesterday"
      },
      {
          "image": "teja.jpg",
          "name": "Teja",
          "lastMessage": "photo favicon Photo ",
          "dateTime": "yesterday"
      }
  ],
  "status": [
      {
          "image": "ram.jpg",
          "name": "ram",
          "dateTime": "31/12/2019"
      },
      {
          "image": "krishna.jpg",
          "name": "krishna",
          "dateTime": "12:41"
      },
      {
          "image": "ashwin.jpg",
          "name": "ashwin",
          "dateTime": "yesterday"
      },
      {
          "image": "nagu.jpg",
          "name": "nagu",
          "dateTime": "yesterday"
      }
  ]
  ,
  "calls": [
      {
          "image": "ram.jpg",
          "name": "ram",
          "dateTime": "31/12/2019",
          "type": "call"
      },
      {
          "image": "krishna.jpg",
          "name": "krishna",
          "dateTime": "12:41",
          "type": "video"
      },
      {
          "image": "ashwin.jpg",
          "name": "ashwin",
          "dateTime": "yesterday",
          "type": "video"
      },
      {
          "image": "nagu.jpg",
          "name": "nagu",
          "dateTime": "yesterday",
          "type": "call"
      }
  ]

};

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    chats: () => mockData.chats,
    calls: () => mockData.calls,
    status: () => mockData.status,
  }
};


const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
app.use(cors(corsOptions));

server.applyMiddleware({ 
  app,
  cors: false
});

app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);