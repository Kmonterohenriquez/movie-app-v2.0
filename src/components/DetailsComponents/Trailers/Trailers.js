import React, { Component } from 'react'
import './Trailers.sass'
import trailersCarousel from './trailersCarousel'


class Trailers extends Component {
    render(){
        trailersCarousel();
        return (
        <div className='Trailers-container'>
          <div className='swiper-container '>
            <h1 className='Section-title'>Trailers</h1>
            <div className='swiper-wrapper'>
              {this.props.trailers.map( (trailer, key ) =>(
                  <div className='swiper-slide' key={key}>
                      <iframe
                          title= {trailer.name}
                          src={`https://www.youtube.com/embed/${trailer.key}`}
                          frameBorder="0" 
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                          allowFullScreen>
                      </iframe>
                  </div>
              ))}
              </div>

            {this.props.trailers.length === 1?'':
            <div>
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </div>
            }
          </div>
        </div>
      );
  }
}

export default Trailers;