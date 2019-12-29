import React from 'react';
import './App.sass';
import router from './router';
import Nav from './components/Nav/Nav';
import { withRouter } from 'react-router-dom';

function App(props) {
	const currLocation = props.location.pathname;
	
	return (
		<div className='App'>
			{currLocation === '/login' || currLocation === '/signup' || currLocation === '/register' || true === currLocation.includes("/detail") ? (
				<>{router}</>
			) : (
				<>
					<Nav />
					{router}
				</>
			)}
		</div>
	);
}

export default withRouter(App);
