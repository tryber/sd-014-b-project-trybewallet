import { USER } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
    password: '',
  },
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER:
    return {
      email: action.payload.email,
      password: action.payload.password,
    };

  default:
    return state;
  }
};

export default userReducer;

// import { LOGIN } from '../actions';

// const user = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//   case LOGIN:
//     return {
//       ...state,
//       email: action.payload,
//     };

//   default:
//     return state;
//   }
// };

// export default user;
