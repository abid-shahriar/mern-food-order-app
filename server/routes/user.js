import express from 'express';
import { signIn, signUp } from '../controllers/user.js';

const router = express.Router();

router.post('/login', signIn);
router.post('/signup', signUp);

export default router;
