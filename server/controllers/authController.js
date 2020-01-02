const bcrypt = require('bcryptjs');

module.exports = {
	register: async (req, res) => {
		const { username, password, email, user_pic } = req.body;
		const db = req.app.get('db');

		const { session } = req;
		let user = await db.users.check_user(email);
		user = user[0];

		if (user.email) {
			return res.status(500).send({ error: 'Email is already in use.' })
		} 
		// else if(user.password){

		// }
		const salt = bcrypt.genSaltSync(10);
		const hash = bcrypt.hashSync(password, salt);
		let newUser = await db.users.register_user(username, hash, email, user_pic);
		newUser = newUser[0];

		let sessionUser = { ...newUser };
		session.user = sessionUser;
	},
	login: async (req, res) => {
		const { email, password } = req.body;
		const db = req.app.get('db');
		const { session } = req;

		let user = await db.users.check_user(email);
		user = user[0];

		if (!user) {
			return res.status(400).send('Email not found.');
		}

		const authorized = bcrypt.compareSync(password, user.password);
		if (authorized) {
			delete user.password;
			session.user = user;
			res.status(202).send(session.user);
		} else {
			res.status(401).send('Incorrect password.');
		}
		console.log('A user Logged In: ', session.user)
	},
	logout: (req, res) => {
		req.session.destroy();
		res.sendStatus(200);
	},
	userData(req, res) {
		const { user } = req.session;
		if (user) {
			return res.status(200).send({ loggedIn: true, user });
		} else {
			return res.sendStatus(401);
		}
	}
};
