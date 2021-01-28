import * as actionTypes from '../constants/actionTypes';

const initialState = {
	user: '',
	isLoading: false,
	error: '',
	success: ''
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.CLEAR_MESSAGES:
			return {
				...state,
				isLoading: false,
				error: '',
				success: ''
			};
		case actionTypes.SIGNUP_REQUEST:
			return {
				...state,
				user: '',
				isLoading: true,
				error: ''
			};

		case actionTypes.SIGNUP_SUCCESS:
			localStorage.setItem('profile', JSON.stringify({ ...action.payload }));
			return {
				...state,
				user: action.payload,
				isLoading: false,
				error: ''
			};

		case actionTypes.SIGNUP_FAILED:
			return {
				...state,
				user: '',
				isLoading: false,
				error: action.payload
			};
		case actionTypes.LOGIN_REQUEST:
			return {
				...state,
				user: '',
				isLoading: true,
				error: ''
			};
		case actionTypes.LOGIN_SUCCESS:
			localStorage.setItem('profile', JSON.stringify({ ...action.payload }));
			return {
				...state,
				user: action.payload,
				isLoading: false,
				error: ''
			};

		case actionTypes.LOGIN_FAILED:
			return {
				...state,
				user: '',
				isLoading: false,
				error: action.payload
			};
		case actionTypes.LOGOUT:
			localStorage.removeItem('profile');
			return {
				...state,
				user: '',
				isLoading: false,
				error: ''
			};
		case actionTypes.EDITPROFILE_REQUEST:
			return {
				...state,
				isLoading: true,
				error: ''
			};

		case actionTypes.EDITPROFILE_SUCCESS:
			localStorage.setItem('profile', JSON.stringify({ ...action.payload }));
			return {
				...state,
				user: action.payload,
				isLoading: false,
				error: '',
				success: action.payload.message
			};
		case actionTypes.EDITPROFILE_FAILED:
			console.log(action.payload);
			return {
				...state,
				success: '',
				error: action.payload
			};

		default:
			return state;
	}
};

export default authReducer;
