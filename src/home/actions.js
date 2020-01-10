import { ERROR, ACTIVE_TAB_DATA } from "./actionTypes";
import { getActiveTabData } from "./restApi";

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
