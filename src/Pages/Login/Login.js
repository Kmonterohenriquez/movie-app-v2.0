import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cinema from '../../img/cinema.png'
import lights from '../../img/lights.jpg'
import './Login.sass'
const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		console.log('Email: ', email);
		console.log('Password: ', password);
	};
	return (
		<div className='Login-container'>
			<img className='ligths-img' src={lights} alt='lights' />
			<Link to='/'>
				<i className='arrow fas fa-chevron-left'></i>
			</Link>
			<div className='Login-content xsm-container'>
				<img className='cinema-img' src={cinema} alt='cinema' />
				<h1 id='Login-title'> Login</h1>
				<form onSubmit={(e)=>handleSubmit(e)}>
					<div className='Username-input'>
						<i className='fas fa-user'></i>
						<input onChange={(e)=> setEmail(e.target.value)} type='email' placeholder='Email' />
					</div>
					<div className='Password-input'>
						<i className='fas fa-lock'></i>
						<input onChange={(e)=> setPassword(e.target.value)} type='password' placeholder='Password' />
					</div>
					<button type='submit'>LogIn</button>
					<p>Not a member? <Link to='/signup'>Register</Link></p>
					<p><Link to ='#'>Forgot Password?</Link></p>
				</form>
			</div>
		</div>
	);
};

export default Login;
