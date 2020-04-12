import { REMOVE_ALERT, SET_ALERT } from '../types';

export default (state, action) => {
  switch (action.type) {
    case REMOVE_ALERT:
      return {
        ...state,
        msg: action.payload.msg,
        alert: false,
      };
    case SET_ALERT:
      return {
        ...state,
        msg: action.payload.msg,
        alert: true,
        type: action.payload.type,
      };
    default:
      return state;
  }
};
