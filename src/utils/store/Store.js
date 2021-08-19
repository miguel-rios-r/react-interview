import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { userReducer } from './reducers/UserReducer';

const rootReducer = combineReducers({
  user: userReducer
})
//applyMiddleware(thunk)
const store = createStore(rootReducer)
export default store