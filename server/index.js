require('dotenv').config();
const express = require('express'),
	massive = require('massive'),
	session = require('express-session'),
	{ SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env,
	authCtrl = require('./controllers/authController'),
	reviewCtrl = require('./controllers/reviewController'),
	moviesAndTvCtrl = require('./controllers/moviesAndTvControllers'),
	app = express();

app.use(express.json());

app.use(
	session({
		resave: false,
		saveUninitialized: true,
		secret: SESSION_SECRET,
		cookie: { maxAge: 1000 * 60 * 60 * 24 }
	})
);

massive(CONNECTION_STRING).then(db => {
	app.set('db', db);
	console.log('db connected');
});

//auth endpoints
app.post('/auth/login', authCtrl.login);
app.post('/auth/register', authCtrl.register);
app.post('/auth/logout', authCtrl.logout);
app.get('/auth/userData', authCtrl.userData);

app.post('/api/review', reviewCtrl.createReview);
app.get('/api/review/:movie_id', reviewCtrl.getMovieReviews);
app.delete('/api/review/:review_id', reviewCtrl.deleteReview);
// app.put('/api/review/:review_id', reviewCtrl.editReview);
// app.get('/api/review/:id', reviewCtrl.getUserReviews);


app.get('/api/favorite_movies/:movie_id/:user_id', moviesAndTvCtrl.checkMovie);
app.post('/api/favorite_movies', moviesAndTvCtrl.addFavMovie);
app.delete('/api/favorite_movies/:movie_id/:user_id', moviesAndTvCtrl.deleteFavMovie);
// app.get('/api/favorite_movies', moviesAndTvCtrl.getFavMovies);
// app.post('/api/favorite_shows', moviesAndTvCtrl.addFavShow);
// app.get('/api/favorite_shows', moviesAndTvCtrl.getFavShows);


const port = SERVER_PORT ;
app.listen(port, () => console.log(`Server running on port ${port}`));
