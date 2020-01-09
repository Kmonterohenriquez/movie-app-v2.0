import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import getUser from '../../redux/actions/user/getUser';
import profile_placeholder from '../../img/profile-placeholder.jpg';
import './Register.sass';
// import userPlaceholder from '../../img/profile-placeholder.jpg';
import lights from '../../img/lights.jpg';

import Dropzone from 'react-dropzone';
import { v4 as randomString } from 'uuid';
// import { GridLoader } from 'react-spinners';
const Register = props => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	// const [user_pic, setUserPic] = useState(profile_placeholder);
	// const [isUploading, setIsUploading] = useState(false);
	const [url, setUrl] = useState(profile_placeholder);
	console.clear()
	console.log('Email', email)
	const handleSubmit = e => {
		e.preventDefault();
		let user_pic = url;
		axios
			.post('/auth/register', { username, password, email, user_pic })
			.then(res => {
				props.getUser(res.data);
				props.history.push('/login');
			})
			.catch(err => console.log(err.response.data.error));
	};
	console.log('sign up btn hit');
	console.log('URL::: ', url)
	const getSignedRequest = ([file]) => {
		// setIsUploading(true);
		// We are creating a file name that consists of a random string, and the name of the file that was just uploaded with the spaces removed and hyphens inserted instead. This is done using the .replace function with a specific regular expression. This will ensure that each file uploaded has a unique name which will prevent files from overwriting other files due to duplicate names.
		const fileName = `${randomString()}-${file.name.replace(/\s/g, '-')}`;

		// We will now send a request to our server to get a "signed url" from Amazon. We are essentially letting AWS know that we are going to upload a file soon. We are only sending the file-name and file-type as strings. We are not sending the file itself at this point.
		axios
			.get('/api/signs3', {
				params: {
					'file-name': fileName,
					'file-type': file.type
				}
			})
			.then(response => {
				const { signedRequest, url } = response.data;
				uploadFile(file, signedRequest, url);
			})
			.catch(err => {
				console.log(err);
			});
	};

	const uploadFile = (file, signedRequest, url) => {
		const options = {
			headers: {
				'Content-Type': file.type
			}
		};

		axios
			.put(signedRequest, file, options)
			.then(response => {
				// setIsUploading(false);
				setUrl(url);
				// THEN DO SOMETHING WITH THE URL. SEND TO DB USING POST REQUEST OR SOMETHING
			})
			.catch(err => {
				// setIsUploading(false);
				if (err.response.status === 403) {
					alert(
						`Your request for a signed URL failed with a status 403. Double check the CORS configuration and bucket policy in the README. You also will want to double check your AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY in your .env and ensure that they are the same as the ones that you created in the IAM dashboard. You may need to generate new keys\n${err.stack}`
					);
				} else {
					alert(`ERROR: ${err.status}\n ${err.stack}`);
				}
			});
	};
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
				// data-wow-duration='1s'
				data-wow-delay='.1s'
				src={lights}
				alt='lights'
			/>
			<div className='Register-container wow bounceIn' data-wow-delay='.6s'>
				<h1>Sign Up</h1>
				<div className='img-container'>
					<img className='profile-img' src={url} alt='' />
					<Dropzone
					onDropAccepted={getSignedRequest}
					accept='image/*'
					multiple={false}
					className='test'
				>
					{({ getRootProps, getInputProps }) => (
						<div className='container'>
							<div
								{...getRootProps({
									className: 'dropzone',
									onDrop: event => event.stopPropagation()
								})}
							>
								
								<input {...getInputProps()} />
								<div className='camera-container'><i className="fas fa-camera"></i></div>
							</div>
						</div>
					)}
				</Dropzone>
				</div>
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
						<i className='far fa-envelope'></i>
						<input
							onChange={e => setEmail(e.target.value)}
							type='email'
							placeholder='Email'
						/>
					</div>
					<div className='Password-input'>
						<i className='fas fa-lock'></i>
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
