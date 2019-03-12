import {
	SET_WIDTH
} from '../actions/types';

const initialState = {
	width: null
}

export default (state = initialState, action) => {
	switch (action.type) {
	case SET_WIDTH:
		return {
			...state,
			width: action.width
		};

	default: return state;
	}
};
