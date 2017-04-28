import { CREATE_USER, DELETE_USER, FETCH_USER, FETCH_USERS } from '../actions/index';

const INITIAL_STATE = { users: initialUsers() };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_USERS:
      return {...state, users: action.payload.data };
    default:
      return state;
  }
}

function initialUsers() {
  return [
    {
        id: 1, 
        name: 'Robert Obreczarek',
        email: 'robert@obreczarek.com'
    },
    {
        id: 2, 
        name: 'Russell Łasa',
        email: 'russell@obreczarek.com'
    },
    {
        id: 3, 
        name: 'Kathy Kateson',
        email: 'kathy@obreczarek.com'
    },
    {
        id: 4, 
        name: 'Joe Brown',
        email: 'joe@brown.com'
    },
    {
        id: 42, 
        name: 'Tobi Wobi',
        email: 'tobi@wobi.com'
    },
    {
        id: 123, 
        name: 'Manny Fresh',
        email: 'manny@superfresh.com'
    }
  ];
}