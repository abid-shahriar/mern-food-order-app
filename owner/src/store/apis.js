import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:4000' });

API.interceptors.request.use((req) => {
	if (localStorage.getItem('foodbird')) {
		const token = JSON.parse(localStorage.getItem('foodbird')).token;
		req.headers.authorization = `bearer ${token}`;
	}
	return req;
});

export const register = (shop) => API.post('/shop/register', shop);
