import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const URI = process.env.MONGODB_URI;
const PORT = 4000;

const app = express();

app.use(express.json());
app.use(cors());

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
