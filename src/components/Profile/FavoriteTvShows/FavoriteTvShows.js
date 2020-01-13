import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import getUser from '../../../redux/actions/user/getUser';
import ItemsContainer from '../ItemsContainer/ItemsContainer';
const FavoriteTvShows = props => {
	const [favShows, setFavShows] = useState([]);

	const { user_id } = props.user.user;

	useEffect(() => {
		getFavShows();
		console.log('useEffect 1 running');
	}, []);
	useEffect(() => {
		console.log('useEffect 2 running');
	}, [favShows]);

	const getFavShows = async () => {
		await Axios.get(`/api/favorite_shows/${user_id}`)
			.then(res => {
				setFavShows(res.data);
				// console.clear();

				console.log('we got from fv_shows db:', res.data);
			})
			.catch(err => console.log(err));
	};

	const deleteFavShows = async show_id => {
		console.clear();
		console.log('Show id deleted: ', show_id);

		await Axios.delete(`/api/favorite_shows/${show_id}/${user_id}`).catch(err =>
			console.log(err)
		);
		getFavShows();
	};
	// console.clear()
	console.log('props  from fav tv shows', props);
	return (
		<div className='FavoriteTvShows'>
			<ItemsContainer
				itemsInfo={favShows}
				title='Favorite Shows'
				deleteFn={deleteFavShows}
			/>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		user: state.userReducer
	};
};

export default connect(mapStateToProps, { getUser })(FavoriteTvShows);
