export const signIn = (req, res) => {
	console.log(req.body.password);
	if (req.body.password !== '12345567') {
		res.status(400).json({ message: 'wrong pass' });
	}

	res.json({ user: req.body });
};
