import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();

const secret = process.env.JWT_SECRET;

import userModel from '../models/userModel.js';

export const signIn = (req, res) => {
	console.log(req.body.password);
	if (req.body.password !== '12345567') {
		res.status(400).json({ message: 'wrong pass' });
	}

	res.json({ user: req.body });
};

export const signUp = async (req, res) => {
	const { firstName, lastName, email, password } = req.body;

	try {
		const oldUser = await userModel.findOne({ email });

		if (oldUser) return res.status(400).json({ message: 'User Already Exist' });

		const hashedPass = await bcrypt.hash(password, 12);

		const newUser = { ...req.body, password: hashedPass };

		await userModel.create(newUser);

		const token = jwt.sign({ email, firstName, lastName }, secret, { expiresIn: '1w' });

		res.status(201).json(token);
	} catch (error) {
		console.log(error);
	}
};
