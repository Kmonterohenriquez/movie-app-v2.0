import React, { Component } from 'react';
import './Header.sass';
// import Fade from 'react-reveal/Fade';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
            sortBy: 'popularity.asc',
            voteAverage: 5,
            withPeople: null,
            withGenres: null,
            withKeywords: null,
            year: null,
		};
	}
	handleSubmit=(e)=> {
        e.preventDefault();
        const{sortBy, voteAverage, withPeople, withGenres, withKeywords, year} = this.state;
        this.props.getMovies(sortBy, voteAverage, withPeople, withGenres, withKeywords, year);
	}

	handleChange=(e)=> {
		this.setState({[e.target.name]: e.target.value})
	}

	render() {
		console.clear()
		console.log('from header discover: ', this.state.sortBy)
		console.log('vote discover: ', this.state.voteAverage)

		return (
			<div className='Header'>
				<h1>Discover</h1>
				<hr />
				<form onSubmit={this.handleSubmit}>
					<div className='search-filter'>
						<select name='sortBy' onChange={this.handleChange}>
							<option value='popularity.asc'>Popularity Ascending</option>
							<option value='popularity.desc'>Popularity descending</option>
							<option value='release_date.asc'>Release Date Ascending</option>
							<option value='release_date.desc'>Release Date Descending</option>
							<option value='revenue.asc'>Revenue Ascending</option>
							<option value='revenue.desc'>Revenue Descending</option>
							<option value='vote_average.asc'>Vote Average Ascending</option>
							<option value='vote_average.desc'>Vote Average Descending</option>
						</select>
						<input name='voteAverage' onChange= {this.handleChange} type='numeric' placeholder='Enter rating' min='0' max='10' />
						<input name='withPeople' type='text' placeholder='People involved' />

						<select name='withGenres' onChange= {this.handleChange} placeholder='Enter Genres'>
							<option value='Drama'>Drama</option>
							<option value='Action'>Action</option>
							<option value='Comedy'>Comedy</option>
							<option value='Fantasy'>Fantasy</option>
							<option value='Historical'>Historical</option>
							<option value='Adventure'>Adventure</option>
							<option value=''></option>
						</select>
						<input name='withKeywords' onChange={this.handleChange} type='text' placeholder='Keywords' />
						<input name='year' onChange={this.handleChange} type='numeric' placeholder='Enter Year' />
					</div>
					<button type='submit'> Search </button>
				</form>
			</div>
		);
	}
}

export default Header;
