import { CHATS, STATUS, CALLS } from "./types";
import { getChats, getStatus, getCalls } from "./api";

export function getChatInfo() {
    return (dispatch) => {
        getChats().then(data => {
            dispatch({ type: CHATS, payload: data })
        }).catch(error => {
            dispatch({ type: 'ERROR', payload: 'error in getting chats data' })
        })
    }
}

export function getStatusInfo() {
    return (dispatch) => {
        getStatus().then(data => {
            dispatch({ type: STATUS, payload: data })
        }).catch(error => {
            dispatch({ type: 'ERROR', payload: 'error in getting status data' })
        })
    }
}

export function getCallsInfo() {
    return (dispatch) => {
        getCalls().then(data => {
            dispatch({ type: CALLS, payload: data })
        }).catch(error => {
            dispatch({ type: 'ERROR', payload: 'error in getting calls data' })
        })
    }
}