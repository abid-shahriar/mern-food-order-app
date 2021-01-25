const initiaState = {};

const LocalStorageUser = (state = initiaState) => {
	if (localStorage.getItem('profile')) {
		const user = JSON.parse(localStorage.getItem('profile'));
		return user;
	} else {
		return state;
	}
};
export default LocalStorageUser;
