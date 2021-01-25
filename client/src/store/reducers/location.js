import { useHistory } from 'react-router-dom';

const initialState = {
	path: ''
};

const LocationReducer = (state = initialState) => {
	const path = useHistory().location.pathname;

	return {
		...state,
		path
	};
};
export default LocationReducer;
