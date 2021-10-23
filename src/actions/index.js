export const LOGIN = 'LOGIN';

export function loginAction(payload) {
  return {
    type: LOGIN,
    payload,
  };
}
