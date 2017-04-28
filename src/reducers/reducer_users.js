import { CREATE_USER, DELETE_USER, FETCH_USER, FETCH_USERS } from '../actions/index';

const INITIAL_STATE = { users: [], message: {} };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case CREATE_USER:
      return {...state, message: action.payload.data };
    case FETCH_USERS:
      return {...state, users: action.payload.data };
    default:
      return state;
  }
}