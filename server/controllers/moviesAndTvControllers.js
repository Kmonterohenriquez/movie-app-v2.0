module.exports = {
	addFavMovie: async (req.res) => {
		const { movie_pic, movie_rate, user_id } = req.body;
		const db = req.app.get('db');

		await db.fav_movies.getFavMove;
	},
	getFavMovies: async (req, res) => {
		const { user_id } = req.body;
		const db = req.app.get('db');

		await db.fav_movies.getFavMovie(user_id);
	},
	getFavTv: (req, res) => {
		const {} = req.body;
	}
};
