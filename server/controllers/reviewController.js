module.exports = {
	createReview: (req, res) => {
		const { movie_id, user_id, review_content, movie_title } = req.body;
		const db = req.app.get('db');
		db.reviews
			.create_review(movie_id, user_id, review_content, movie_title)
			.then(res => res.sendStatus(200))
			.catch(err => res.status(500).send(err));
	},
	getAllReviews: (req, res) => {
		const db = req.app.get('db');
		db.reviews
			.get_all_reviews()
			.then(reviews => res.status(200).send(reviews))
			.catch(err => res.status(500).send(err));
	},
	getUserReviews: (req, res) => {
		const db = req.app.get('db');
		const { user_id } = req.body;
		db.reviews
			.get_user_reviews(user_id)
			.then(reviews => res.status(200).send(reviews))
			.catch(err => res.status(500).send(err));
	}
};
