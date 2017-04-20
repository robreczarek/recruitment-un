export const FETCH_USER = 'FETCH_USER';

export function fetchUser() {

   const request = [];

  return {
    type: FETCH_USER,
    payload: request
  };
}