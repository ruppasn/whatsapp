import {applyMiddleware, createStore} from "redux";
import {createLogger} from "redux-logger";
import reducers from "./rootReducer";
import thunk from 'redux-thunk'

const middleware = [ thunk ];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  reducers,
  applyMiddleware(...middleware)
);


export default store;
