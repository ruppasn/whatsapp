import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from "react-router-dom";
import Routes from './routes'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Route path="/" component={Routes} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
