import React from 'react';
import profileImg from '../../../img/profile-placeholder.jpg';
import { connect } from 'react-redux';
import './LeftPanel.sass';
import { withRouter } from 'react-router-dom';
import getUser from '../../../redux/actions/user/getUser';
import axios from 'axios';

const LeftPanel = props => {
	const logout = async () => {
		await axios.post('/auth/logout').catch(err => console.log(err));
	console.log('logged out');
		props.history.push('/');
	};
	const user = props.user.user;
	console.log('left Panel result:', user);
	return (
		<div className='LeftPanel'>
			<div className='Profile-picture-container'>
				<div className="change-pic">
					<i className="fas fa-camera"></i>
				</div>
				<img src={user.user_picture} className='Profile-picture' alt='' />
			</div>
			<h1>{user.username}</h1>
			<button className='primary-button' onClick={() => logout()}>
				Logout
			</button>
		</div>
	);
};
const mapStateToProps = state => ({
	user: state.userReducer
});

export default withRouter(connect(mapStateToProps, { getUser })(LeftPanel));
