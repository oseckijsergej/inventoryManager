import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import monitorItems from '../components/Monitor/IndexMonitor/monitorReducer';

const rootReducer = combineReducers({
  form,
  routing: routerReducer,
  monitorItems,
});

export default rootReducer;