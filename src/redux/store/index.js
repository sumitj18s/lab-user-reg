/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import reducer from "../reducer";
import createSagaMiddleware from "redux-saga";
import { userSaga } from "../sagas/userSaga";
import { reducer as formReducer } from "redux-form";
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  // ...your other reducers here
  // you have to pass formReducer under 'form' key,
  // for custom keys look up the docs for 'getFormState'
  users: reducer,
  form: formReducer,
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const sagas = [userSaga];
sagas.forEach((saga) => sagaMiddleware.run(saga));

export default store;
