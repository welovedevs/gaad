import { combineReducers } from 'redux';

import UtilsReducer from './utils_reducer';

export default combineReducers({
	utils: UtilsReducer
});
