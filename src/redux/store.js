import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

export default function configureStore() {
  // const rootReducer = 
  let store =  createStore(rootReducer,applyMiddleware(thunk));
  return store
}
