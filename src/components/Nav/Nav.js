import React from 'react'
import './Nav.sass'
import {Link} from 'react-router-dom'

const Nav =()=>{
    return(
        <header className="Nav">
            <div className="logo">BestMovies</div>
            <div className="search-bar">
                <input type="text" placeholder='Search...'/>
                <i className="fas fa-search"></i>
            </div>
            <nav>
                <ul>
                    <Link to='#'><li><i className="fas fa-home"></i></li></Link>
                    <Link to='/login'><li><i className="fas fa-user-circle"></i></li></Link>
                    <Link to='#'><li><i className="fas fa-search"></i></li></Link>
                </ul>
            </nav>
        </header>
    )
}

export default Nav 