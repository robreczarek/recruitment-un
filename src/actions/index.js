import axios from 'axios';

export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_REJECTED = 'CREATE_USER_REJECTED';

export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_REJECTED = 'DELETE_USER_REJECTED';

export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_REJECTED = 'FETCH_USERS_REJECTED';

export const PUSH_ERROR = 'PUSH_ERROR';

const ROOT_URL = 'http://localhost:8181';

export function createUser(props) {

  return function(dispatch){
    return axios.post(`${ROOT_URL}/users/`, props)
      .then((request) =>{
        dispatch({
          type: CREATE_USER_SUCCESS, 
          payload: request.data
        });
      })
      .catch((err) => {
        dispatch({
          type: CREATE_USER_REJECTED, 
          payload: err
        });
      })
  }
}

export function deleteUser(id) {

  return function(dispatch) {
    return axios.delete(`${ROOT_URL}/users/${id}`)
      .then((request) => {
        console.log(request);
        dispatch({
          type: DELETE_USER_SUCCESS,
          payload: id
        });
      })
      .catch((error) => {
        dispatch({
          type: DELETE_USER_REJECTED,
          payload: error
        });
      });
  };
}

export function fetchUsers() {

  return function(dispatch) {
    return axios.get(`${ROOT_URL}/users/`)
      .then((request) => {
        dispatch({
          type: FETCH_USERS_SUCCESS,
          payload: request.data
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_USERS_REJECTED,
          payload: request.data
        });
      });
  };

}

export function pushError(message) {
  return {
    type: PUSH_ERROR,
    payload: message
  };
}
