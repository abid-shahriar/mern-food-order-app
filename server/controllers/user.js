import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();

const secret = process.env.JWT_SECRET;

import userModel from '../models/userModel.js';

export const signIn = async (req, res) => {
	const { email, password } = req.body;

	try {
		const oldUser = await userModel.findOne({ email });

		if (!oldUser) return res.status(404).json({ message: 'no user found with this email' });

		const isPassCorrect = await bcrypt.compare(password, oldUser.password);

		if (!isPassCorrect) return res.status(400).json({ message: 'invalid Credentials' });

		const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
			expiresIn: '1w'
		});

		const userData = { email: oldUser.email, firstName: oldUser.firstName, lastName: oldUser.lastName, id: oldUser._id };

		res.status(200).json({ ...userData, token });
	} catch (error) {
		console.log(error);
	}
};

export const signUp = async (req, res) => {
	const { firstName, lastName, email, password } = req.body;

	try {
		const oldUser = await userModel.findOne({ email });

		if (oldUser) return res.status(400).json({ message: 'User Already Exist' });

		const hashedPass = await bcrypt.hash(password, 12);

		const newUser = await userModel.create({ firstName, lastName, email, password: hashedPass });

		const token = jwt.sign({ email: newUser.email, id: newUser._id }, secret, {
			expiresIn: '1w'
		});

		const userData = { email: newUser.email, firstName: newUser.firstName, lastName: newUser.lastName, id: newUser._id };

		res.status(201).json({ ...userData, token });
	} catch (error) {
		console.log(error);
	}
};
export const updateUser = async (req, res) => {
	if (!req.userID) return res.status(400).json({ message: 'Unauthorized User' });

	const userID = req.userID;

	const { firstName, lastName, email } = req.body;

	try {
		// const otherUserWithEmail = await userModel.findOne({ email });

		// if (otherUserWithEmail) return res.status(400).json({ message: 'The email is already taken' });

		// const oldUser = await userModel.findOne({ userID });

		// console.log(oldUser);

		// if (!oldUser) return res.status(400).json({ message: 'Unauthorized User' });

		const updateUserData = { firstName, lastName, email };

		const updateUser = await userModel.findByIdAndUpdate(userID, updateUserData, { new: true });

		const token = jwt.sign({ email: updateUser.email, id: updateUser._id }, secret, {
			expiresIn: '1w'
		});

		const userData = { email: updateUser.email, firstName: updateUser.firstName, lastName: updateUser.lastName, id: updateUser._id };

		res.status(201).json({ ...userData, token, message: 'Profile Update Success' });
	} catch (error) {
		console.log(error);
	}
};
