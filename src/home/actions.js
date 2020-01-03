import { CHATS, STATUS, CALLS, ERROR, ACTIVE_TAB_DATA } from "./actionTypes";
import { getChats, getStatus, getCalls, getActiveTabData } from "./restApi";

export function getChatInfo() {
    return (dispatch) => {
        getChats().then(data => {
            dispatch({ type: CHATS, payload: data })
        }).catch(error => {
            dispatch({ type: ERROR, payload: 'error in getting chats data' })
        })
    }
}

export function getStatusInfo() {
    return (dispatch) => {
        getStatus().then(data => {
            dispatch({ type: STATUS, payload: data })
        }).catch(error => {
            dispatch({ type: ERROR, payload: 'error in getting status data' })
        })
    }
}

export function getCallsInfo() {
    return (dispatch) => {
        getCalls().then(data => {
            dispatch({ type: CALLS, payload: data })
        }).catch(error => {
            dispatch({ type: ERROR, payload: 'error in getting calls data' })
        })
    }
}


export function getTabData(activeTabName) {

    return (dispatch) => {
        getActiveTabData(activeTabName).then(data => {
            dispatch({ type: ACTIVE_TAB_DATA, payload: {
                data, activeTabName} })
        }).catch(error => {
            dispatch({ type: ERROR, payload: `error in getting ${activeTabName} data` })
        })
    }
}

