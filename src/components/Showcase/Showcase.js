import React from 'react';
import {connect} from 'react-redux'
import getNowPlayingMovies from '../../redux/actions/movies/getNowPlayingMovies'
import './Showcase.sass'
const Showcase =()=>{
    console.log()
    return(
        <div className="Showcase">
            
        </div>
    )
}
const mapStateToProps =state=>({
    nowPlayingMovies: state.getNowPlayingMovies
})
export default connect(mapStateToProps, {getNowPlayingMovies})(Showcase)