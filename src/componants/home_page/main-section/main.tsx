import React from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'


const Main = () => {
  return (
    <div>
        <section className="main-section" id='home'>
            <div className="main-container">
              <img src={process.env.PUBLIC_URL + "/curtains.jpg"} alt="backgroung" className='background' />
              <div className="contant">
                <h4 className="main-header">7 stand up <br /> comedians</h4>
                <p className="paragragh">
                  loaded with jokes and quotes that will 
                kill your past sadness and 
                shape your future happiness, in short yes we are over rated and we are happy to be...
                </p>
              </div>
              <div className="watch-us">
                <a href="https://www.facebook.com/squadrastandup" target='_blank' rel='noreferrer' ><FontAwesomeIcon icon={faPlay} className="faplay"/></a>
                <a href="https://www.facebook.com/squadrastandup" target='_blank' rel='noreferrer' >Watch us now!</a>
              </div>
              <div className="media">
                <ul>
                  <a href='https://www.facebook.com/squadrastandup' target='_blank' rel='noreferrer'><li><FontAwesomeIcon icon={faFacebook} className="fafacebook"/></li></a>
                  <a href='https://www.youtube.com/@ScrollComedy' target='_blank' rel='noreferrer'><li><FontAwesomeIcon icon={faYoutube} className="fayoutube"/></li></a>
                  <a href='https://www.instagram.com/squadrastandup/' target='_blank' rel='noreferrer'><li><FontAwesomeIcon icon={faInstagram} className="fainsta"/></li></a>
                </ul>
              </div>
              <div className="ellipse-container">
                <img src={process.env.PUBLIC_URL + "/squadra1.png"} alt="squadra" className='squadra' />

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