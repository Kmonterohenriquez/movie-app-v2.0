import React from 'react';
// STYLE
import './Profile.sass';
// import categories from ''
// COMPONENTS

import LeftPanel from './LeftPanel/LeftPanel.js';
import NavCategories from './NavCategories/NavCategories.js';
import CategorySliderCategory from './CategorySliderCategory/CategorySliderCategory'
const Profile = () => {
	return (
		<div className='Profile '>
		
			<div className='Profile-grid lg-container'>
				<div className='LeftPanel'>
					<LeftPanel />
				</div>
				<div className='RightPanel'>
					<NavCategories />
					<CategorySliderCategory />
					{/* {categories} */}
				</div>
			</div>
		</div>
	);
};

export default Profile;
