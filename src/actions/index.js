export const GET_EMAIL = 'GET_EMAIL';

export const getEmail = (payload) => ({ type: GET_EMAIL, payload });

export const getOther = (payload) => ({ type: 'GET_OTHER', payload });
