import React from 'react';
import './App.css';
import router from './router'
import Nav from './components/Nav/Nav'
function App() {
	return (
		<div className='App'>
			<Nav />
			{router}
		</div>
	);
}

export default App;
