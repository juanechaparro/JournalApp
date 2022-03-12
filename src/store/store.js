import thunk from 'redux-thunk'
import {createStore, combineReducers,applyMiddleware, compose} from 'redux'
import { authReducer } from '../reducers/authReducer';

import { uiReducer } from '../reducers/uiReducers';
import { notesReducer } from '../reducers/notesReducer';
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
// const store = createStore(rootReducer, applyMiddleware(thunk))
const reducers = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  notes:notesReducer

});
export const store = createStore( reducers,composeEnhancers(applyMiddleware(thunk)));