import graphQLClient from '../graphQL/graphQLClient'
import { GET_CHATS, GET_STATUS, GET_CALLS } from "../graphQL/graphQLQueries";

const callQueryMap = {
    calls: GET_CALLS,
    chats: GET_CHATS,
    status: GET_STATUS
}

const getGraphQLData = (queryType) => {
    return graphQLClient.query({ query: callQueryMap[queryType] })
}

export const getActiveTabData = (activeTabName) => {
    return getGraphQLData(activeTabName)

}
