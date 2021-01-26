import express from 'express';

import auth from '../middlewares/auth.js';

import { signIn, signUp, updateUser } from '../controllers/user.js';

const router = express.Router();

router.post('/login', signIn);
router.post('/signup', signUp);
router.put('/update', auth, updateUser);

export default router;
