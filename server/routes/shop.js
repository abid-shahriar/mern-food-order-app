import express from 'express';

// import auth from '../middlewares/auth.js';

// import { signIn, signUp, updateUser } from '../controllers/user.js';
import { register } from '../controllers/shop.js';

const router = express.Router();

router.post('/register', register);

export default router;
