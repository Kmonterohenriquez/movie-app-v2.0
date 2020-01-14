import React from 'react';
import '../FavoriteMovies/FavoriteMovies.sass';
const ItemsContainer = props => {
	const favMovies = props.itemsInfo;
	return (
		<div className='FavoriteMovies' style={{ color: 'white' }}>
			<h1>{props.title}</h1>
			<div className='grid-fav-movie'>
				{favMovies.map(curr => (
					<div className='fav-movie-card ' key={curr.movie_id}>
						<img
							src={`http://image.tmdb.org/t/p/w300/${curr.movie_pic ||
								curr.show_pic}`}
							alt={`${curr.movie_id} backdrop`}
						/>
						<div className='info'>
							<p className='movie-name'>
								{curr.movie_name || curr.tv_name}
								<i className='star fas fa-star'></i>
								{curr.movie_rate || curr.show_rate}
							</p>
							<div className='btn-container'>
								<button
									className='delete-btn'
									onClick={() => props.deleteFn(curr.movie_id || curr.show_id)}
								>
									Delete
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ItemsContainer;
