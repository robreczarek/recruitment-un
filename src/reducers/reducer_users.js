import { CREATE_USER_SUCCESS, DELETE_USER_SUCCESS, FETCH_USERS_SUCCESS } from '../actions/index';

const INITIAL_STATE = { users: [] };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {

    case CREATE_USER_SUCCESS:
      return { 
        ...state, 
        users: [ ...state.users, action.payload ]
      };

    case DELETE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.filter( user => user.id !== action.payload )
      }

    case FETCH_USERS_SUCCESS:
      return {...state, users: action.payload };

    default:
      return state;
  }
}