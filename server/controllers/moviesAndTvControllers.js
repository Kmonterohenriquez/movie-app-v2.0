module.exports = {
	checkMovie: async (req, res) => {
		const { movie_id, user_id } = req.params;
<<<<<<< HEAD
		const db = req.app.get('db');
		await db.movies_and_tv
			.check_fav_movie(movie_id, user_id)
			.then(movie => res.status(200).send(movie))
			.catch(err => res.status(500).send(err));
	},
	addFavMovie: async (req, res) => {
		// Bringing info from the frond end
		const { movie_id, movie_pic, movie_rate, user_id, movie_name } = req.body;
=======
		const db = req.app.get('db')
		await db.movies_and_tv.check_fav_movie(movie_id, user_id)
		// .then(movie => res.status(200).send(movie))
		.then(movie => res.status(200).send(movie))
		.catch(err => res.status(500).send(err))  
	},
	addFavMovie: async (req, res) => {
		// Bringing info from the frond end
		const { movie_id, movie_pic, movie_rate, user_id } = req.body;
>>>>>>> 662d577d9cfadc60a90cc5bf40ecf6c4dbad2043

		// set db to a variable
		const db = req.app.get('db');

		await db.movies_and_tv
<<<<<<< HEAD
			.add_fav_movie(movie_id, movie_pic, movie_rate, user_id, movie_name)
=======
			.add_fav_movie(movie_id, movie_pic, movie_rate, user_id)
>>>>>>> 662d577d9cfadc60a90cc5bf40ecf6c4dbad2043
			.then(res.sendStatus(200))
			.catch(err => res.status(500).send(err));
	},
	deleteFavMovie: async (req, res) => {
		console.log('delete running');
		const { movie_id, user_id } = req.params;
		const db = req.app.get('db');
		await db.movies_and_tv
			.delete_fav_movie(movie_id, user_id)
			.then(res.sendStatus(200))
			.catch(err => res.status(500).send(err));
	},
	getFavMovies: async (req, res) => {
		const { user_id } = req.params;
		const db = req.app.get('db');

		await db.movies_and_tv
			.get_fav_movies(user_id)
			.then(movies => res.status(200).send(movies))
			.catch(err => res.status(500).send(err));
	},
<<<<<<< HEAD
	checkShow: async (req, res) => {
		const { show_id, user_id } = req.params;
		const db = req.app.get('db');
		await db.movies_and_tv
			.check_fav_show(show_id, user_id)
			.then(show => res.status(200).send(show))
			.catch(err => res.status(500).send(err));
	},
	addFavShow: async (req, res) => {
		const { show_id, show_pic, show_rate, user_id, tv_name } = req.body;
		const db = req.app.get('db');

		await db.movies_and_tv
			.add_fav_show(show_id, show_pic, show_rate, user_id, tv_name)
=======
	addFavShow: async (req, res) => {
		const { show_id, show_pic, show_rate, user_id } = req.body;
		const db = req.app.get('db');

		await db.movies_and_tv
			.add_fav_show(show_id, show_pic, show_rate, user_id)
>>>>>>> 662d577d9cfadc60a90cc5bf40ecf6c4dbad2043
			.then(res.sendStatus(200))
			.catch(err => res.status(500).send(err));
	},

	deleteFavShow: async (req, res) => {
<<<<<<< HEAD
		const { show_id, user_id } = req.params;
		const db = req.app.get('db');

		await db.movies_and_tv
			.delete_fav_show(show_id, user_id)
=======
		const { fav_shows_id } = req.params;
		const db = req.app.get('db');

		await db.movies_and_tv
			.delete_fav_show(fav_shows_id)
>>>>>>> 662d577d9cfadc60a90cc5bf40ecf6c4dbad2043
			.then(res.sendStatus(200))
			.catch(err => res.status(500).send(err));
	},
	getFavShows: async (req, res) => {
		const { user_id } = req.params;
		const db = req.app.get('db');

		await db.movies_and_tv
			.get_fav_shows(user_id)
			.then(shows => res.status(200).send(shows))
			.catch(err => res.status(500).send(err));
	}
};
