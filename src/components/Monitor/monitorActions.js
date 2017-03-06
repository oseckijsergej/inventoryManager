import axios from 'axios';
import { FETCH_MONITOR_ITEMS } from '../../constants/actionTypes';
import { SERVER_PATH } from '../../constants/appConstants';

// export const fetchMonitorItems = () => dispatch => {
//   dispatch({
//     type: `${FETCH_MONITOR_ITEMS}_FULFILLED`,
//     payload: axios.get(`${SERVER_PATH}/api/monitor`)
//   });
// };

export const fetchMonitorItems = () => {
  let data = {
    data: [
      {
        id: 0,
        name: 'Atlanta Luxury Motors',
        googleId: '428-771-8758',
        active: true,
        activatedAdGroups: 161,
        noResultFound: 543,
        errors: 0,
        adGroupChangeTotal: 7
      },
    ]
  };

  return {
    type: `${FETCH_MONITOR_ITEMS}_FULFILLED`,
    payload: data
  };
};