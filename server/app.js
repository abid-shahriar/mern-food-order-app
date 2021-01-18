import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import userRoutes from './routes/user.js';

dotenv.config();

const URI = process.env.MONGODB_URI;
const PORT = 4000;

const app = express();

app.use(express.json());
app.use(cors());

app.use('/user', userRoutes);

mongoose
	.connect(URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true
	})
	.then(() => {
		console.log('connected to db');
		app.listen(PORT, () => {
			console.log('app running');
		});
	});
