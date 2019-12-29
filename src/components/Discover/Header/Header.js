import React, { Component } from 'react';
import './Header.sass';
// import Fade from 'react-reveal/Fade';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
            sortBy: null,
            voteAverage: null,
            withPeople: null,
            withGenres: null,
            withKeywords: null,
            year: null,
		};
	}
	handleSubmit=(e)=> {
		console.log('search btn pressed')
        e.preventDefault();
        const{sortBy, voteAverage, withPeople, withGenres, withKeywords, year} = this.state;
        this.props.getFilterInfo(sortBy, voteAverage, withPeople, withGenres, withKeywords, year);
	}

	handleChange=(e)=> {
		// if (e.target.name === 'sortBy') this.setState({ sortBy: e.target.value });
        // if (e.target.name === 'voteAverage') this.setState({ voteAverage: e.target.value });
        // if (e.target.name === 'withPeople') this.setState({ withPeople: e.target.value });
        // if (e.target.name === 'withGenres') this.setState({ withGenres: e.target.value });
        // if (e.target.name === 'withKeywords') this.setState({ withKeywords: e.target.value });
		// if (e.target.name === 'year') this.setState({ year: e.target.value });
		this.setState({[e.target.name]: e.target.value})
	}
	render() {
		return (
			<div className='Header'>
				<h1>Discover</h1>
				<hr />
				<form onSubmit={this.handleSubmit}>
				{/* <Fade top cascade duration={2000} delay={900}> */}
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
				{/* </Fade> */}
					<button type='submit'> Search </button>
				</form>
			</div>
		);
	}
}

export default Header;
