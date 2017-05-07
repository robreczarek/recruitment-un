import { CREATE_USER_SUCCESS, DELETE_USER_SUCCESS, FETCH_USERS_SUCCESS } from '../actions/index';

const INITIAL_STATE = { users: [] };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {

    case CREATE_USER_SUCCESS:
      return [{...action.payload}, ...state];

    case DELETE_USER_SUCCESS:
      let usersNew = [...state];
      usersNew = usersNew.filter ( user => user.id !== action.payload );
      return usersNew;

    case FETCH_USERS_SUCCESS:
      return {...state, users: action.payload };

    default:
      return state;
  }
}