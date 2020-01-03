import { CHATS, STATUS, CALLS, ERROR, ACTIVE_TAB_DATA } from "./actionTypes";

const initialState = {
    chats: [],
    status: [],
    calls: [],
    error: ''
}
export default (state = initialState, { type, payload }) => {

    switch (type) {
        case CHATS:
            return {
                ...state,
                chats: payload.data
            }
        case CALLS:
            return {
                ...state,
                calls: payload.data
            }
        case STATUS:
            return {
                ...state,
                status: payload.data
            }
        case ERROR:
            return {
                ...state,
                error: payload.data
            }
        case ACTIVE_TAB_DATA:
            console.log('in reducer',payload)
            return {
                ...state,
                [payload.activeTabName]: payload.data.data
            }

        default:
            return state;

    }
}
