import { FETCH_USERS } from '../actions/index';

const INITIAL_STATE = { users: [], message: {} };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_USERS:
      return {...state, users: action.payload.data };
    default:
      return state;
  }
}