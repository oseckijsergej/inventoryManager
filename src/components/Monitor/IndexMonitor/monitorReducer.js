import { FETCH_MONITOR_ITEMS } from '../../../constants/actionTypes';

export default function monitorReducer(state = [], action) {
  switch (action.type) {
    case `${FETCH_MONITOR_ITEMS}_FULFILLED`:
      return action.payload.data;
    default:
      return state;
  }
}