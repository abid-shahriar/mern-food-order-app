import mongoose from 'mongoose';

const shopSchema = mongoose.Schema({
	shopName: { type: String, required: true },
	image: String,
	description: String,
	email: String,
	password: String,
	items: [
		{
			name: String,
			image: String,
			desccription: String,
			price: String
		}
	]
});

export default mongoose.model('shop', shopSchema);
