import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');

	const handleSubmit = e => {
        e.preventDefault();
        console.log(username, email, password)
	};
	return (
		<div className='Signup'>
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

export default Signup;
