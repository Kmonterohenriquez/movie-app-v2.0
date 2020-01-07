import React from 'react'
import './NavCategories.sass'

const NavCategories =()=> {
    return(
        <div className="NavCategories NavCategories-grid">
            <div className="option">
                <div className="icon-container"><i className="fas fa-heart"></i></div>
                <p>Favorite Movies</p>
            </div>
            <div className="option">
                <div className="icon-container"><i className="fas fa-heart"></i></div>
                <p>Favorite Tv Shows</p>
            </div>
            <div className="option">
                <div className="icon-container"><i className="fas fa-medal"></i></div>
                <p>Rated Movies</p>
            </div>
            <div className="option">
                <div className="icon-container"><i className="fas fa-medal"></i></div>
                <p>Rated Tv Shows</p>
            </div>

            
        </div>
    )
}

export default NavCategories
