module.exports = {
	addFavMovie: async (req, res) => {
		// Bringing info from the frond end
		const { movie_pic, movie_rate, user_id } = req.body;

		// set db to a variable
		const db = req.app.get('db');

		await db.movies_and_tv
			.add_fav_movie(movie_pic, movie_rate, user_id)
			.then(res.sendStatus(200))
			.catch(err => res.status(500).send(err));
	},
	getFavMovies: async (req, res) => {
		const { user_id } = req.body;
		const db = req.app.get('db');

		await db.movies_and_tv
			.get_fav_movies(user_id)
			.then(movies => res.status(200).send(movies))
			.catch(err => res.status(500).send(err));
	},
	addFavShow: async (req, res) => {
		const { show_pic, show_rate, user_id } = req.body;
		const db = req.app.get('db');
		await db.movies_and_tv
			.add_fav_show(show_pic, show_rate, user_id)
			.then(res.sendStatus(200))
			.catch(err => res.status(500).send(err));
	},

	getFavShows: async (req, res) => {
		const { user_id } = req.body;
		const db = req.app.get('db');

		await db
			.get_fav_shows(user_id)
			.then(shows => res.status(200).send(shows))
			.catch(err => res.status(500).send(err));
	}
};
