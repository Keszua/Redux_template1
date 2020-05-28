import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";

import App from "./App";

//dodanie Middlewares:
// logger to funkcja która zwraca funkcje, która zwraca funkcje, która zwraca funkcję.
// strore zawiera dispatch i getState
// next pozwala przekazać wywołanie akcji do kolejnego midlewera w dół i posiada obiekt akcji który został zgispathowany
const logger = store => next => action => {
  console.group(action.type);
  console.info("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  console.groupEnd();

  return result;
};

const store = createStore(
  rootReducer,
  applyMiddleware(logger) //tutaj przekazujemy listę middlewarów
);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
