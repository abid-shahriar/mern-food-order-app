import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:4000' });

API.interceptors.request.use((req) => {
	if (localStorage.getItem('profile')) {
		const token = JSON.parse(localStorage.getItem('profile')).token;
		req.headers.authorization = `Bearer ${token}`;
	}

	return req;
});

export const signIn = (user) => API.post('/user/login', user);
export const signUp = (user) => API.post('/user/signup', user);
export const editProfile = (userData) => API.post('/user/editProfile', userData);
