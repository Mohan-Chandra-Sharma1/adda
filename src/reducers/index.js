import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import AppointmentsReducer from './AppointmentsReducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
  appointments: AppointmentsReducer
});

export default rootReducer;