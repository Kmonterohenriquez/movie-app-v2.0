module.exports = {
	createReview: async (req, res) => {
		const {
			movie_id,
			user_id,
			review_content,
			movie_title,
			item_type
		} = req.body;
		const db = req.app.get('db');
		await db.reviews.create_review(
			movie_id,
			user_id,
			review_content,
			movie_title,
			item_type
		);
		// .then(res => res.sendStatus(200))
		// .catch(err => res.status(500).send(err));
		res.sendStatus(200);
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
