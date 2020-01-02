import restClient from "../restClient";

const CHATS_URL = 'chats'
const STATUS_URL = 'status'
const CALLS_URL = 'calls'

export const getChats = () => {
    return restClient.get(CHATS_URL)
}

export const getStatus = () => {
    return restClient.get(STATUS_URL)
}

export const getCalls = () => {
    return restClient.get(CALLS_URL)
}
