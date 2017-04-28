import axios from 'axios';

export const CREATE_USER = 'CREATE_USER';
export const DELETE_USER = 'DELETE_USER';
export const FETCH_USER = 'FETCH_USER';
export const FETCH_USERS = 'FETCH_USERS';

const ROOT_URL = 'http://localhost:8181';

export function createUser(props) {
  const request = new Promise((resolve, reject) => { 
    resolve();
  });

  return {
    type: CREATE_USER,
    payload: request
  };
}

export function deleteUser(props) {
  const request = new Promise((resolve, reject) => { 
    resolve();
  });

  return {
    type: DELETE_USER,
    payload: request
  };
}

export function fetchUser(id) {

   const request = [];

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
