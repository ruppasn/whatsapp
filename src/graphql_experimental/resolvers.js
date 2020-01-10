import mockData from './mockData'

// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
      chats: () => mockData.chats,
      calls: () => mockData.calls,
      status: () => mockData.status,
    }
};

export default resolvers