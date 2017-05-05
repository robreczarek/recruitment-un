import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import UserReducer from './reducer_users';
import ErrorReducer from './reducer_error';

const reducers = {
  form: formReducer,
  users: UserReducer,
  error_message: ErrorReducer
};

const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer);

export default rootReducer;