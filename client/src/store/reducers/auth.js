import * as actionTypes from '../constants/actionTypes';

const initialState = {
	userToken: '',
	loading: true,
	error: ''
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SIGNUP_REQUEST:
			return {
				...state,
				userToken: '',
				loading: true,
				error: ''
			};

		case actionTypes.SIGNUP_SUCCESS:
			console.log(action.payload);
			return {
				...state,
				userToken: action.payload,
				loading: false,
				error: ''
			};

		case actionTypes.SIGNUP_FAILED:
			console.log(action.payload);
			return {
				...state,
				userToken: '',
				loading: false,
				error: action.payload
			};
		case actionTypes.LOGIN_REQUEST:
			console.log(action.payload);
			console.log(state);
			return {
				...state,
				userToken: '',
				loading: true,
				error: ''
			};
		case actionTypes.LOGIN_SUCCESS:
			console.log(action.payload);
			return {
				...state,
				userToken: action.payload,
				loading: false,
				error: ''
			};

		case actionTypes.LOGIN_FAILED:
			console.log(state);
			console.log(action.payload);
			return {
				...state,
				userToken: '',
				loading: false,
				error: action.payload
			};

		default:
			return state;
	}
};

export default authReducer;
