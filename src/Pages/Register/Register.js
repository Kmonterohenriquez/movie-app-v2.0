import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import getUser from '../../redux/actions/user/getUser';
import profile_placeholder from '../../img/profile-placeholder.jpg';
import './Register.sass';
import userPlaceholder from '../../img/profile-placeholder.jpg';
import lights from '../../img/lights.jpg'
const Register = props => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	// const [user_pic, setUserPic] = useState(profile_placeholder);

	const handleSubmit = e => {
		e.preventDefault();
		let user_pic = profile_placeholder;
		axios
			.post('/auth/register', { username, password, email, user_pic })
			.then(res => {
				props.getUser(res.data);
				props.history.push('/login');
			})
			.catch(err => console.log(err.response.data.error));
	};
	console.log('sign up btn hit');

	return (
		<div className='Register'>
			<Link to='/login'>
				<i
					className='arrow fas fa-chevron-left wow bounceInLeft'
					data-wow-delay='1s'
				></i>
			</Link>
			<img
				className='lights-img wow fadeIn'
				data-wow-duration='1s'
				data-wow-delay='.3s'
				src={lights}
				alt='lights'
			/>
			<div className='Register-container'>
				<h1>Sign Up</h1>
				<img className='profile-img' src={userPlaceholder} alt='' />
				<form onSubmit={e => handleSubmit(e)}>
					<div className='Username-input'>
					<i className='fas fa-user'></i>
						<input
							onChange={e => setUsername(e.target.value)}
							type='text'
							placeholder='Username'
						/>
					</div>
					<div className='Email-input'>
					<i className="far fa-envelope"></i>
						<input
							onChange={e => setEmail(e.target.value)}
							type='email'
							placeholder='Email'
						/>
					</div>
					<div className='Password-input'>
					<i className="fas fa-lock"></i>
						<input
							onChange={e => setPassword(e.target.value)}
							type='password'
							placeholder='Password'
						/>
					</div>
					<div className='btn-container'>
						<button type='submit'>Sign up</button>
						<p>
							Already have an account? <br />
							<Link to='/login'>
								<span>Login</span>
							</Link>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default withRouter(connect(null, { getUser })(Register));
