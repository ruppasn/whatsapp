import { gql } from 'apollo-boost'

export const GET_CHATS = gql`
query {
    chats {
      image
      name
      lastMessage
      dateTime
    }
  }
`;

export const GET_CALLS = gql`
query {
    calls {
      image
      name
      dateTime
      type
    }
  }
`;


export const GET_STATUS = gql`
query {
    status {
      image
      name
      dateTime
    }
  }
`;
