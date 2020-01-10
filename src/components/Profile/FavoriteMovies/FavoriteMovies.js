import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import getUser from '../../../redux/actions/user/getUser';
import './FavoriteMovies.sass' 
// import
const FavoriteMovies = props => {
	const [favMovies, setFavMovies] = useState([]);

	useEffect(() => {
		getFavMovies();
		console.log('Use Effect updated from Fav Movies');
	}, []);
	const { user_id } = props.user.user;
	const getFavMovies = async () => {
		await Axios.get(`/api/favorite_movies/${user_id}`)
			.then(res => {
				setFavMovies(res.data);
			})
			.catch(err => console.log(err));
	};

	return (
		<div className='FavoriteMovies' style={{ color: 'white' }}>
			<h1>Favorite Movies</h1>
			{favMovies.map(curr => (
				<div key={curr.movie_id}>
					<img
						src={`http://image.tmdb.org/t/p/w300/${curr.movie_pic}`}
						alt={`${curr.movie_id} backdrop`}
					/>
					<p>
						<i className='star fas fa-star'></i>
						{curr.movie_rate}
					</p>
				</div>
			))}
		</div>
	);
};

const mapStateToProps = state => {
	return {
		user: state.userReducer
	};
};
export default connect(mapStateToProps, { getUser })(FavoriteMovies);
