import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import getUser from '../../redux/actions/user/getUser';
import profile_placeholder from '../../img/profile-placeholder.jpg';

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
			
	};
	// console.log(props.location)
	return (
		<div className='Register'>
			<h1>Sign Up</h1>
			<form onSubmit={e => handleSubmit(e)}>
				<input
					onChange={e => setUsername(e.target.value)}
					type='text'
					placeholder='Username'
				/>
				<input
					onChange={e => setEmail(e.target.value)}
					type='email'
					placeholder='Email'
				/>
				<input
					onChange={e => setPassword(e.target.value)}
					type='password'
					placeholder='Password'
				/>
				<button type='submit'>Sign up</button>
				<Link to='/login'>
					<button>login</button>
				</Link>
			</form>
		</div>
	);
};

export default withRouter(connect(null, { getUser })(Register));
