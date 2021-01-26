import * as actionTypes from '../constants/actionTypes';

const initialState = {
	user: {},
	isLoading: false,
	error: ''
};

const updateUser = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.EDITPROFILE_REQUEST:
			return {
				user: {},
				isLoading: true,
				error: {}
			};

		case actionTypes.EDITPROFILE_SUCCESS:
			return {
				user: action.payload,
				isLoading: true,
				error: {}
			};
		case actionTypes.EDITPROFILE_FAILED:
			return {
				user: {},
				isLoading: false,
				error: action.payload
			};

		default:
			return state;
	}
};

export default updateUser;
