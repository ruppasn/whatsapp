import { ERROR, ACTIVE_TAB_DATA } from "./actionTypes";

const initialState = {
    chats: [],
    status: [],
    calls: [],
    error: ''
}
export default (state = initialState, { type, payload }) => {

    switch (type) {
        
        case ERROR:
            return {
                ...state,
                error: payload.data
            }
        case ACTIVE_TAB_DATA:
            console.log('in reducer',payload)
            return {
                ...state,
                [payload.activeTabName]: payload.data.data[payload.activeTabName]
            }

        default:
            return state;

    }
}
