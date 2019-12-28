import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import axios from 'axios'
import getUser from '../../redux/actions/user/'
import profile_placeholder from '../../img/profile-placeholder.jpg'

const Register = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const [user_pic, setUserPic] = userState(profile_placeholder);

	const handleSubmit = e => {
        e.preventDefault();
        // console.log(username, email, password)
        axios.post('/auth/register',{username, password, email , user_pic})
        .then(res => props.getUser(res.data))
        .catch( res => console.log(res))
	};
	return (
		<div className='Register'>
			<h1>Sign Up</h1>
			<form onSubmit={e => handleSubmit(e)}>
				<input onChange={(e)=> setUsername(e.target.value)}type='text' placeholder='Username' />
				<input onChange={(e)=> setEmail(e.target.value)}type='email' placeholder='Email' />
				<input onChange={(e)=> setPassword(e.target.value)}type='password' placeholder='Password' />
				<button type='submit'>Sign up</button>
				<Link to='/login'>
					<button>login</button>
				</Link>
			</form>
		</div>
	);
};

export default withRouter(connect(null, {createUser})(Register));