import { PUSH_ERROR } from '../actions/index';

const INITIAL_STATE = { error_message: '' };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case PUSH_ERROR:
      return {...state, error_message: action.payload };
    default:
      return state;
  }
}