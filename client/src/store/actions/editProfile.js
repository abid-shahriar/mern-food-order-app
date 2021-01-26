import * as actionTypes from '../constants/actionTypes';
import * as API from '../api/index';

export const editProfile = (userData) => async (dispatch) => {
	dispatch({ type: actionTypes.EDITPROFILE_REQUEST, payload: userData });

	try {
		const { data } = await API.editProfile(userData);
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
