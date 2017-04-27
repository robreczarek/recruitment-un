export const FETCH_USER = 'FETCH_USER';
export const CREATE_USER = 'CREATE_USER';

export function fetchUser() {

   const request = [];

  return {
    type: FETCH_USER,
    payload: request
  };
}

export function createUser(props) {
  const request = new Promise((resolve, reject) => { 
    resolve();
  });

  return {
    type: CREATE_USER,
    payload: request
  };
}