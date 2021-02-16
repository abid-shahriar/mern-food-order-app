import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import shopModel from '../models/shopModel.js';

dotenv.config();

const secret = process.env.JWT_SECRET;

export const register = async (req, res) => {
	const { shopName, email, password } = req.body;

	const existingShop = await shopModel.findOne({ email });

	console.log(existingShop);

	if (existingShop) return res.status(400).json({ message: 'A shop already exist with this email address' });

	try {
		const hashedPass = await bcrypt.hash(password, 12);

		const newShop = await shopModel.create({ shopName, email, password: hashedPass });

		const token = jwt.sign({ email: newShop.email, id: newShop._id }, secret, { expiresIn: '1W' });

		const shopData = { email: newShop.email, shopName: newShop.shopName, id: newShop._id };

		res.status(200).json({ ...shopData, token });
	} catch (error) {
		console.log(error);
	}
};
