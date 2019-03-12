/* eslint import/prefer-default-export:0 */
import {
	SET_WIDTH
} from './types';

export const setWidth = width => (dispatch) => {
	if (width === undefined) {
		console.log('Check `width` passed to `setWidth`.');
		return null;
	}
	return dispatch({
		type: SET_WIDTH,
		width
	});
}
