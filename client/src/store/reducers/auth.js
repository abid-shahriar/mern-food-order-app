import * as actionTypes from '../constants/actionTypes';

const initialState = {
	user: '',
	loading: false,
	error: ''
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SIGNUP_REQUEST:
			return {
				...state,
				user: '',
				loading: true,
				error: ''
			};

		case actionTypes.SIGNUP_SUCCESS:
			localStorage.setItem('profile', JSON.stringify({ ...action.payload }));
			return {
				...state,
				user: action.payload,
				loading: false,
				error: ''
			};

		case actionTypes.SIGNUP_FAILED:
			return {
				...state,
				user: '',
				loading: false,
				error: action.payload
			};
		case actionTypes.LOGIN_REQUEST:
			return {
				...state,
				user: '',
				loading: true,
				error: ''
			};
		case actionTypes.LOGIN_SUCCESS:
			localStorage.setItem('profile', JSON.stringify({ ...action.payload }));
			return {
				...state,
				user: action.payload,
				loading: false,
				error: ''
			};

		case actionTypes.LOGIN_FAILED:
			return {
				...state,
				user: '',
				loading: false,
				error: action.payload
			};
		case actionTypes.LOGOUT:
			localStorage.removeItem('profile');
			return {
				...state,
				user: '',
				loading: false,
				error: ''
			};
		case actionTypes.EDITPROFILE_REQUEST:
			return {
				user: {},
				isLoading: true,
				error: {}
			};

		case actionTypes.EDITPROFILE_SUCCESS:
			localStorage.setItem('profile', JSON.stringify({ ...action.payload }));
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

export default authReducer;
