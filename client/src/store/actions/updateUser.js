import * as actionTypes from '../constants/actionTypes';
import * as API from '../api/index';

export const updateUser = (userData) => async (dispatch) => {
	dispatch({ type: actionTypes.EDITPROFILE_REQUEST, payload: userData });

	try {
		const { data } = await API.updateUser(userData);
		dispatch({
			type: actionTypes.EDITPROFILE_SUCCESS,
			payload: data
		});
	} catch (error) {
		dispatch({
			type: actionTypes.EDITPROFILE_FAILED,
			payload: error.response.data.message
		});
	}
};

export const clearMessages = (bool) => async (dispatch) => {
	console.log('fn');
	bool && dispatch({ type: actionTypes.CLEAR_MESSAGES, payload: '' });
};
