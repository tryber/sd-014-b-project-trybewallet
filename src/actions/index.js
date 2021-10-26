export const UPDATE_USER_INFO = 'UPDATE_USER_INFO';

export function updateUserInfo(payload) {
  return {
    type: UPDATE_USER_INFO,
    payload,
  };
}
