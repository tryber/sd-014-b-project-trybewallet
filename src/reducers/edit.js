import { EDIT_ACTIONS, EDIT_OBJ } from '../actions';

const INITIAL_STATE = { edit: false, obj: {} };

const edit = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case EDIT_ACTIONS:
    return { ...state, edit: action.edit };
  case EDIT_OBJ:
    return { ...state, obj: action.obj };
  default:
    return state;
  }
};

export default edit;
