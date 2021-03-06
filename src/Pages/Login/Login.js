import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import cinema from '../../img/cinema.png';
import lights from '../../img/lights.jpg';
import './Login.sass';
import { connect } from 'react-redux';
import getUser from '../../redux/actions/user/getUser';
import axios from 'axios';


const Login = props => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		axios.post('/auth/login', { email, password }).then(res => {
			props.getUser(res.data);
			props.history.push('/')
	});}

	return (
		<div className='Login-container'>

			<img className='lights-img' src={lights} alt='lights' />

			<Link to='/'>
				<i
					className='arrow fas fa-chevron-left wow bounceInLeft'
					data-wow-delay='1s'
				></i>
			</Link>
			<div
				className='Login-content xsm-container wow bounceIn'
				data-wow-delay='1s'
			>
				<img className='cinema-img' src={cinema} alt='cinema' />
				<h1 id='Login-title'> Login</h1>
				<form onSubmit={e => handleSubmit(e)}>
					<div className='Username-input'>
						<i className='fas fa-user'></i>
						<input
							onChange={e => setEmail(e.target.value)}
							type='email'
							placeholder='Email'
							required
						/>
					</div>
					<div className='Password-input'>
						<i className='fas fa-lock'></i>
						<input
							onChange={e => setPassword(e.target.value)}
							type='password'
							placeholder='Password'
							required
						/>
					</div>
					<button type='submit'>LogIn</button>
					<p>
						Not a member? <Link to='/register'>Register</Link>
					</p>
					<p>
						<Link to='#'>Forgot Password?</Link>
					</p>
				</form>
			</div>
		</div>
	);
};

const mapStateToProps = state => ({
	getUser: state.getUser
});

export default withRouter(connect(mapStateToProps, { getUser })(Login));
