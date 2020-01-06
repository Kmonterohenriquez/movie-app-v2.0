import React from 'react';
import {connect} from 'react-redux'
import getNowPlayingMovies from '../../redux/actions/movies/getNowPlayingMovies'
import './Showcase.sass'
import {Link} from 'react-router-dom'
import ShowcaseCarousel from './ShowcaseCarousel'
const Showcase =(props)=>{
    console.log("SHOWCASE result: ", props.nowPlayingMovies.nowPlayingMovies)
    ShowcaseCarousel()
    return(
        <div className='Showcase-container'>
				<div className='swiper-container'>
					<div className='swiper-wrapper'>
						{props.nowPlayingMovies.nowPlayingMovies.map(movie => (

							movie.backdrop_path ?
							<div className='swiper-slide' key={movie.id}>
								<Link to={`/details/${movie.id}`}>
									<div className='Showcase-img'>
										<img
											src={`http://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
											alt={`${movie.backdrop_path} backdrop`}
										/>
									</div>
									<div className='Movie-info'>
										<h3>Latest</h3>
										<h1 className='Showcase-title'>{movie.title}</h1>
										<p className='Showcase-rating'>
											Drama | {movie.vote_average} Rating
										</p>
									</div>
								</Link>
							</div>: null
						))}
					</div>
					<div className='swiper-pagination'></div>
				</div>
			</div>
    )
}
const mapStateToProps =state=>({
    nowPlayingMovies: state.getNowPlayingMovies
})
export default connect(mapStateToProps, {getNowPlayingMovies})(Showcase)