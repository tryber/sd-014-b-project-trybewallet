const initialState = { email: '', password: '' };

export default function userReducer(state = initialState, action) {
  switch (action.type) {
  case 'user/email':
    return { ...state, email: action.payload };
  case 'user/password':
    return { ...state, password: action.payload };
  default:
    return state;
  }
}
