import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import getUser from '../../../redux/actions/user/getUser';
import './FavoriteMovies.sass';
import ItemsContainer from '../ItemsContainer/ItemsContainer';
// import
const FavoriteMovies = props => {
	const [favMovies, setFavMovies] = useState([]);

	const { user_id } = props.user.user;

	useEffect(() => {
		getFavMovies();
		// console.log('useEffect 1 running');
	}, []);
	useEffect(() => {
		// console.log('useEffect 2 running');
	}, [favMovies]);

	const getFavMovies = async () => {
		await Axios.get(`/api/favorite_movies/${user_id}`)
			.then(res => {
				setFavMovies(res.data);
			})
			.catch(err => console.log(err));
	};

	const deleteFavMovies = async movie_id => {
		await Axios.delete(
			`/api/favorite_movies/${movie_id}/${user_id}`
		).catch(err => console.log(err));
		getFavMovies();
	};
	return (
		<div className='FavoriteMovies' style={{ color: 'white' }}>
			<ItemsContainer
				itemsInfo={favMovies}
				title='Favorite Movies'
				deleteFn={deleteFavMovies}
			/>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		user: state.userReducer
	};
};
export default connect(mapStateToProps, { getUser })(FavoriteMovies);
