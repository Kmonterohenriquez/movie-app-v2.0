import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.sass';
import Axios from 'axios';

const Header = props => {
	const [heartToggle, setHeartToggle] = useState(false);
	// const [favItem, setFavItem] = useState(null);
	const {
		title,
		backdrop_path,
		poster_path,
		vote_average,
		original_language,
		name,
		// genres,
		id
	} = props.singleDetail;
	const { user_id } = props;
	const movie_id = id;
	const show_id = id;

	useEffect(() => {
		// console.clear();
		if (user_id && props.type === 'movie') {
			Axios.get(`/api/favorite_movies/${movie_id}/${user_id}`).then(res => {
				if (res.data[0]) {
					setHeartToggle(true);
				}
			});
		} else if (user_id && props.type === 'tv') {
			Axios.get(`/api/favorite_shows/${show_id}/${user_id}`).then(res => {
				if (res.data[0]) {
					setHeartToggle(true);
				}
			});
		}
		// console.log('movie checked fn updated', heartToggle, user_id);
});

	let color = heartToggle ? 'red wow heartBeat' : 'white';

	const handleFavBtn = async (id, backdrop_path, vote_average, user_id) => {
		if (user_id && heartToggle === false && props.type === 'movie') {
			// ADD Fav Movie to DB below this line
			await Axios.post('/api/favorite_movies', {
				movie_id: id, // Movie ID
				movie_pic: backdrop_path,
				movie_rate: vote_average,
				user_id,
				movie_name: title
			});
			setHeartToggle(!heartToggle);
		} else if (user_id && heartToggle === true && props.type === 'movie') {
			// DELETE Fav Movie from DB below this line
			const movie_id = id; //Movie ID
			await Axios.delete(
				`/api/favorite_movies/${movie_id}/${user_id}`
			).catch(err => console.log(err));
			setHeartToggle(!heartToggle);
		} else if (user_id && heartToggle === false && props.type === 'tv') {
			// ADD Fav Show to DB below this line
			await Axios.post('/api/favorite_shows', {
				show_id: id, // Show ID
				show_pic: backdrop_path,
				show_rate: vote_average,
				user_id,
				tv_name: name
			});
			setHeartToggle(!heartToggle);
			console.clear();
			console.log('This is one of your fav shows');
		} else if (user_id && heartToggle === true && props.type === 'tv') {
			// DELETE Fav Show from DB below this line
			const show_id = id; //Show ID
			await Axios.delete(
				`/api/favorite_shows/${show_id}/${user_id}`
			).catch(err => console.log(err));
			setHeartToggle(!heartToggle);
		} else if (!user_id) {
			console.log('Must be logged in to use this feature.');
		}
	};
	return (
		<div className='Header-container'>
			<Link to='/'>
				<i className='back-arrow fas fa-chevron-left'></i>
			</Link>
			<i className='share-arrow fas fa-share'></i>
			<div className='Bg-pic'>
				<img
					src={`http://image.tmdb.org/t/p/w1280/${backdrop_path}`}
					alt={`${backdrop_path} backdrop`}
				/>
			</div>
			<div className='info-container'>
				<img
					className='Poster-pic'
					src={`http://image.tmdb.org/t/p/w154/${poster_path}`}
					alt={`${title} poster`}
				/>
				<div className='info'>
					<div className='info-left'>
						<h1> {title || name} </h1>
						<p id='rate'>
							<i className='star fas fa-star'></i> {vote_average}{' '}
						</p>
						<p>
							Released | <span> {original_language} </span>
						</p>
						{/* <div> {genres[0].name ? genres[0].name : <p>Genre</p>} </div> */}
					</div>
					<div className='info-right'>
						<i
							className={`fas fa-heart heart-icon ${color}`}
							onClick={() =>
								handleFavBtn(id, backdrop_path, vote_average, user_id)
							}
						></i>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
