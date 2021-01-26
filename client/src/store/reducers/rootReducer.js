import { combineReducers } from 'redux';

import auth from './auth';
import user from './user';
import updateUser from './updateUser';

export default combineReducers({ auth, user, updateUser });
