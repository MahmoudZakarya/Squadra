import React from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'


const Main = () => {
  return (
    <div>
        <section className="main-section">
            <div className="main-container">
              <img src="curtains.jpg" alt="backgroung" className='background' />
              <div className="contant">
                <h4 className="main-header">7 stand up <br /> comedians</h4>
                <p className="paragragh">
                  loaded with jokes and quotes that will 
                kill your past sadness and 
                shape your future happiness, in short yes we are over rated and we are happy to be...
                </p>
              </div>
              <div className="watch-us">
                <FontAwesomeIcon icon={faPlay} className="faplay"/>
                <a href="#">Watch us now!</a>
              </div>
              <div className="media">
                <ul>
                  <li><FontAwesomeIcon icon={faFacebook} className="fafacebook"/></li>
                  <li><FontAwesomeIcon icon={faYoutube} className="fayoutube"/></li>
                  <li><FontAwesomeIcon icon={faInstagram} className="fainsta"/></li>
                </ul>
              </div>
              <div className="visuals">
                <img src="squadra1.jpg" alt="squadra" className='squadra' />

              </div>
              <div className="ellipse-container">
                <div className="ellipse thin"></div>
                <div className="ellipse thick"></div>
                <div className="ellipse yellow"></div>
              </div>
            </div>
        </section>
    </div>
  )
}

export default Main