// require('dotenv').config({path:__dirname+'/./../../.env'})
require('dotenv').config();
const express = require('express'),
	massive = require('massive'),
	session = require('express-session'),
	{
		S3_BUCKET,
		SERVER_PORT,
		CONNECTION_STRING,
		SESSION_SECRET,
		AWS_ACCESS_KEY_ID,
		AWS_SECRET_ACCESS_KEY
	} = process.env,
	authCtrl = require('./controllers/authController'),
	reviewCtrl = require('./controllers/reviewController'),
	moviesAndTvCtrl = require('./controllers/moviesAndTvControllers'),
	aws = require('aws-sdk'),
	app = express();

app.use(express.json());
app.use(express.static(`${__dirname}/../build`));
// SESSION
app.use(
	session({
		resave: false,
		saveUninitialized: true,
		secret: SESSION_SECRET,
		cookie: { maxAge: 1000 * 60 * 60 * 24 }
	})
);
// MASSIVE
massive(CONNECTION_STRING).then(db => {
	app.set('db', db);
	console.log('db connected');
});

// AMAZON S3(AWS)
app.get('/api/signs3', (req, res) => {
	aws.config = {
		region: 'us-west-1',
		accessKeyId: AWS_ACCESS_KEY_ID,
		secretAccessKey: AWS_SECRET_ACCESS_KEY
	};
	const s3 = new aws.S3();
	const fileName = req.query['file-name'];
	const fileType = req.query['file-type'];
	const s3Params = {
		Bucket: S3_BUCKET,
		Key: fileName,
		Expires: 60,
		ContentType: fileType,
		ACL: 'public-read'
	};

	s3.getSignedUrl('putObject', s3Params, (err, data) => {
		if (err) {
			console.log(err);
			return res.end();
		}
		const returnData = {
			signedRequest: data,
			url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
		};
		console.log(returnData);
		return res.send(returnData);
	});
});
// ALL ENDPOINTS

//  AUTH ENDPOINTS  //
app.post('/auth/login', authCtrl.login);
app.post('/auth/register', authCtrl.register);
app.post('/auth/logout', authCtrl.logout);
app.get('/auth/userData', authCtrl.userData);

//  FAVORITE MOVIES  //
app.get('/api/favorite_movies/:movie_id/:user_id', moviesAndTvCtrl.checkMovie);
app.post('/api/favorite_movies', moviesAndTvCtrl.addFavMovie);
app.delete(
	'/api/favorite_movies/:movie_id/:user_id',
	moviesAndTvCtrl.deleteFavMovie
);

//  FAVORITES SHOWS   //

//  REVIEWS  //
app.post('/api/review', reviewCtrl.createReview); //create review
app.get('/api/review/:movie_id'); // get users' review for each movie or tv
app.delete('/api/review/:review_id', reviewCtrl.deleteReview); //delete users' review
app.put('/api/review/:review_id', reviewCtrl.editReview); // Edit users' review

const port = SERVER_PORT;
app.listen(port, () => console.log(`Server running on port ${port}`));
