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
		await db.reviews
			.create_review(movie_id, user_id, review_content, movie_title, item_type)
			.then(review => res.status(200).send(review));
	},
	getMovieReviews: (req, res) => {
		const { movie_id } = req.params;
		const db = req.app.get('db');
		db.reviews
			.get_movie_reviews(movie_id)
			.then(reviews => res.status(200).send(reviews))
			.catch(err => res.status(500).send(err));
	},
	getUserReviews: async (req, res) => {
		const db = req.app.get('db');
		const { user_id } = req.body;
		await db.reviews
			.get_user_reviews(user_id)
			.then(reviews => res.status(200).send(reviews))
			.catch(err => res.status(500).send(err));
	},
	deleteReview: (req, res) => {
		const { review_id } = req.params;
		const db = req.app.get('db');
		db.reviews.delete_review(review_id).then(res.sendStatus(200));
	},
	// editReview: (req, res)=> {
	// 	const {review_id} = req.body;
	// 	const db = req.app.get('db');
	// 	db.reviews.edit_review(review_id).(then(res.sendStatus(200)))
	// }
};
