import React, {useState} from 'react';
import {Link} from 'react-router-dom'

const Login =()=> {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit =(e)=>{
        e.preventDefault();
         console.log('Email: ', email)
         console.log('Password: ', password)
    }
		return (
			<div className='Login'>
                <h1>Login</h1>
				<form onSubmit={(e)=>handleSubmit(e)}>
					<input onChange={(e)=> setEmail(e.target.value)} type='email' placeholder='Email' />
					<input onChange={(e)=> setPassword(e.target.value)} type='password' placeholder='Password' />
					<button type='submit'>Login</button>
					<Link to='/signup'><button>Signup</button></Link>
				</form>
			</div>
		);
	
}

export default Login;
