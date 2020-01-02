import { combineReducers } from "redux";
import chatsReducer from "./home/reducer";

const reducers = combineReducers({
    whatsapp: chatsReducer
})

export default reducers;