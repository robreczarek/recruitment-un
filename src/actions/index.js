import axios from 'axios';

export const CREATE_USER = 'CREATE_USER';
export const DELETE_USER = 'DELETE_USER';
export const FETCH_USER = 'FETCH_USER';
export const FETCH_USERS = 'FETCH_USERS';

export const PUSH_ERROR = 'PUSH_ERROR';

const ROOT_URL = 'http://localhost:8181';

export function createUser(props) {
  const request = axios.post(`${ROOT_URL}/users/`, props);

  return {
    type: CREATE_USER,
    payload: request
  };
}

export function deleteUser(id) {
  const request = axios.delete(`${ROOT_URL}/users/${id}`);

  return {
    type: DELETE_USER,
    payload: request
  };
}

export function fetchUser(id) {

   const request = axios.get(`${ROOT_URL}/users/${id}`);

  return {
    type: FETCH_USER,
    payload: request
  };
}

export function fetchUsers() {

  const request = axios.get(`${ROOT_URL}/users/`);

  return {
    type: FETCH_USERS,
    payload: request
  };
}

export function pushError(message) {

  return {
    type: PUSH_ERROR,
    payload: message
  };
}



