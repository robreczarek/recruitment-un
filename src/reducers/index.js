import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import UserReducer from './reducer_users';

const reducers = {
  form: formReducer,
  users: UserReducer
};

const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer);

export default rootReducer;