import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import booksReducer from './books/books';

const reducer = combineReducers({
  booksReducer,
});

const configureStore = createStore(
  reducer,
  applyMiddleware(logger),
);

export default configureStore;
