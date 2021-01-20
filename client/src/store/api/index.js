import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:4000' });

export const signIn = (user) => API.post('/user/login', user);
export const signUp = (user) => API.post('/user/signup', user);