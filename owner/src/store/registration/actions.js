import * as constants from '../constants';
import * as API from '../apis';

export const createNewShop = (shop, history) => async (dispatch) => {
	dispatch({
		type: constants.CREATENEWSTORE_REQUEST,
		payload: ''
	});

	try {
		const { data } = await API.register(shop);

		dispatch({
			type: constants.CREATENEWSTORE_SUCCESS,
			payload: data
		});
	} catch (error) {
		dispatch({
			type: constants.CREATENEWSTORE_FAILED,
			payload: error.response.data.message
		});
	}
};
