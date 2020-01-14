import React, { Component } from 'react';
import './Discover.sass';
import axios from 'axios';

<<<<<<< HEAD
// import Header from '../../components/Discover/Header/Header';
=======
import Header from '../../components/Discover/Header/Header';
>>>>>>> 662d577d9cfadc60a90cc5bf40ecf6c4dbad2043
import MoviesContainer from '../../components/Discover/MoviesContainer/MoviesContainer';
import Pagination from '../../components/Discover/Pagination/Pagination';

class Discover extends Component {
	state = {
		sortBy: 'popularity.desc',
		voteAverage: null,
		withPeople: null,
		withGenres: null,
		withKeywords: null,
		year: null,
		page: 1,
		movies: []
	};
	componentDidMount() {
		this.getMovies();
	}
	componentDidUpdate(prevProps, prevState) {
<<<<<<< HEAD
		if (this.state.page !== prevState.page) {
			this.getMovies();
		}
	}

	handleSubmit = e => {
		e.preventDefault();
		this.getMovies();
	};

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};
	getMovies = () => {
		const key_API = process.env.REACT_APP_API_KEY;
=======
		if (this.state.page !== prevState.page){
			this.getMovies()
		}
	
	}
	getFilterInfo = (
		sortBy,
		voteAverage,
		withPeople,
		withGenres,
		withKeywords,
		year
	) => {
		if (sortBy) this.setState({ sortBy });
		if (voteAverage) this.setState({ voteAverage });
		if (withPeople) this.setState({ withPeople });
		if (withGenres) this.setState({ withGenres });
		if (withKeywords) this.setState({ withKeywords });
		if (year) this.setState({ year });
	};

getMovies=()=> {
		const key_API = process.env.REACT_APP_MOVIEDB_API_KEY;
>>>>>>> 662d577d9cfadc60a90cc5bf40ecf6c4dbad2043
		let { page } = this.state;
		axios
			.get(
				`https://api.themoviedb.org/3/discover/movie?api_key=${key_API}&language=en-US&sort_by=${
					this.state.sortBy
				}&include_adult=false&include_video=false&page=${page}&${
					this.state.voteAverage
						? `vote_average.gte=${this.state.voteAverage}&`
						: ''
				}${
					this.state.withGenres ? `with_genres=${this.state.withGenres}&` : ''
				}${
					this.state.withPeople ? `with_people=${this.state.withPeople}&` : ''
				}${this.state.year ? `year=${this.state.year}` : ''}`
			)
			.then(res => {
<<<<<<< HEAD
=======
				// console.log('Discover page result: ', res.data.results);
>>>>>>> 662d577d9cfadc60a90cc5bf40ecf6c4dbad2043
				let movies = res.data.results;
				this.setState({ movies });
			})
			.catch(error => console.log(error));
<<<<<<< HEAD
	};
=======
	}
>>>>>>> 662d577d9cfadc60a90cc5bf40ecf6c4dbad2043

	handlePagination = pageTransition => {
		if (this.state.page === 1 && pageTransition === '-') {
			this.setState({ page: 1 });
		} else if (pageTransition === '+') {
			this.setState({ page: this.state.page + 1 });
		} else if (pageTransition === '-') {
			this.setState({ page: this.state.page - 1 });
		}
	};

	render() {
<<<<<<< HEAD
		console.clear();
		console.log('sortby from discover', this.state.sortBy);
		return (
			<div className='Search'>
				<div className='Header'>
					<h1>Discover</h1>
					<hr />
					<form onSubmit={this.handleSubmit}>
						<div className='search-filter'>
							<select name='sortBy' onChange={this.handleChange}>
								<option value='popularity.asc'>Popularity Ascending</option>
								<option value='popularity.desc'>Popularity descending</option>
								<option value='release_date.asc'>Release Date Ascending</option>
								<option value='release_date.desc'>
									Release Date Descending
								</option>
								<option value='revenue.asc'>Revenue Ascending</option>
								<option value='revenue.desc'>Revenue Descending</option>
								<option value='vote_average.asc'>Vote Average Ascending</option>
								<option value='vote_average.desc'>
									Vote Average Descending
								</option>
							</select>
							<input
								name='voteAverage'
								onChange={this.handleChange}
								type='numeric'
								placeholder='Enter rating'
								min='0'
								max='10'
							/>
							<input
								name='withPeople'
								type='text'
								placeholder='People involved'
							/>

							<select
								name='withGenres'
								onChange={this.handleChange}
								placeholder='Enter Genres'
							>
								<option value='Drama'>Drama</option>
								<option value='Action'>Action</option>
								<option value='Comedy'>Comedy</option>
								<option value='Fantasy'>Fantasy</option>
								<option value='Historical'>Historical</option>
								<option value='Adventure'>Adventure</option>
								<option value=''></option>
							</select>
							<input
								name='withKeywords'
								onChange={this.handleChange}
								type='text'
								placeholder='Keywords'
							/>
							<input
								name='year'
								onChange={this.handleChange}
								type='numeric'
								placeholder='Enter Year'
							/>
						</div>
						<div className='submit-container'>
							<button type='submit'> Search </button>
						</div>
					</form>
				</div>
=======
		console.log('render')
		return (
			<div className='Search'>
				<Header getFilterInfo={this.getFilterInfo} />
>>>>>>> 662d577d9cfadc60a90cc5bf40ecf6c4dbad2043
				{this.state.movies.length >= 1 ? (
					<>
						<MoviesContainer movies={this.state.movies} />
						<Pagination
							handlePagination={this.handlePagination}
							page={this.state.page}
						/>
					</>
				) : (
					<h1 className='NoResults container'>No results found </h1>
				)}
			</div>
		);
	}
}

export default Discover;
