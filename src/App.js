import React from 'react';
import { Provider } from 'react-redux'
import {BrowserRouter, Route} from "react-router-dom";
import routes from './routes'
import store from './stores'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" component={routes} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
