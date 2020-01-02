import { CHATS, STATUS, CALLS, ERROR } from "./actionTypes";

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
        default:
            return state;

    }
}
