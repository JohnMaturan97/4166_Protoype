import { createStore, applyMiddleware  , combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
// import { alertsReducer } from './reducers/alertsReducer';
import { shipsReducer } from './reducers/shipsReducer';
// import {reservesReducer } from './reducers/reservesReducer';
const composeEnhancers = composeWithDevTools({});

const rootReducer = combineReducers({
    shipsReducer,
//    alertsReducer,
//    reservesReducer,
})

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
   
  )
);

export default store