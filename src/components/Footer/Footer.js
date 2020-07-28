import React from 'react';
import './Footer.sass';
import logo from '../../img/theater_logo.png'
import TheMovieDB_logo from '../../img/TheMovieDB.png'

function Footer(){
    
    return(
        <div className='Footer-container'>
            <div className='Footer-content container'>
                <div className='Footer-top'>
                    <div>
                    <img  className='wow fadeInUp' data-w src={logo} alt='Website Logo'/>
                    <nav>
                        {/* <Fade left cascade delay={1000} > */}
                            <ul>
                                <li><span>Portfolio:</span> <a href='https://kevinmontero.com/'>www.kevinmontero..com</a></li>
                                <li><span>Phone:</span> <a href="tel:8637779366">(863) 777-9366</a></li>
                            </ul>
                        {/* </Fade> */}
                    </nav></div>
                    <a href='https://www.themoviedb.org/'><img className='API-logo' src={TheMovieDB_logo} alt='TheMovieDB_logo'/></a>
                </div>
                <div className='social-media'>
                    <div className='social-media-circle'><a href='https://www.facebook.com/themoviedb/'><i className="fab fa-facebook-f"></i></a></div>
                    <div className='social-media-circle'><i className="fab fa-instagram"></i></div>
                    <div className='social-media-circle'><a href='https://www.themoviedb.org/'><i className="fas fa-code"></i></a></div>
                </div>
                {/* <a href="https://www.freepik.com/free-photos-vectors/frame">Frame vector created by freepik - www.freepik.com</a> */}
            </div>
            <div className='copyright'><p>© 2020 Copyright: <a href='https://kevinmontero.netlify.com/' >Kevin Montero</a></p></div>
        </div>
    )
}
export default Footer;