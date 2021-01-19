import * as actionTypes from '../constants/actionTypes';
import * as API from '../api/index';

export const signIn = (user) => async (dispatch) => {
	dispatch({ type: actionTypes.LOGIN_REQUEST, payload: user });

	try {
		const { data } = await API.signIn(user);
		dispatch({
			type: actionTypes.LOGIN_SUCCESS,
			payload: data
		});
	} catch (error) {
		dispatch({
			type: actionTypes.LOGIN_FAILED,
			payload: error.response.data.message
		});
	}
};

export const signUp = (user) => async (dispatch) => {
	dispatch({ type: actionTypes.SIGNUP_REQUEST, payload: user });

	try {
		const { data } = await API.signUp(user);

		dispatch({
			type: actionTypes.SIGNUP_SUCCESS,
			payload: data
		});
	} catch (error) {
		dispatch({
			type: actionTypes.SIGNUP_FAILED,
			payload: error.response.message
		});
	}
};
