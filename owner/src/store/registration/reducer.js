import * as constants from '../constants';

const initialState = {
	shop: '',
	isLoading: false,
	error: ''
};

const shopReducer = (state = initialState, action) => {
	switch (action.type) {
		case constants.CREATENEWSTORE_REQUEST:
			return {
				...state,
				isLoading: true
			};
		case constants.CREATENEWSTORE_SUCCESS:
			localStorage.setItem('foodBirdShop', JSON.stringify({ ...action.payload }));
			return {
				...state,
				isLoading: false,
				shop: action.payload
			};
		case constants.CREATENEWSTORE_FAILED:
			return {
				...state,
				isLoading: false,
				error: action.payload
			};

		default:
			return state;
	}
};

export default shopReducer;
