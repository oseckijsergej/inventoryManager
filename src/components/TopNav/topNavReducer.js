import { TOGGLE_SIDEBAR } from '../../constants/actionTypes';

export default function topNavReducer(state = false, action) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return !state;
    default:
      return state;
  }
}