import { faFacebook, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './style.css'

export default function Footer() {
  return (
    <div>
        <section className="footer-section">
            <div className="footer-container">
                <div className="footer-media">
                    <ul>
                  <a href='https://www.facebook.com/squadrastandup' target='_blank' rel='noreferrer'>  <li className='facebook'><img src={process.env.PUBLIC_URL +"/facebook.png"} alt="" /></li></a>
                  <a href='https://www.youtube.com/@ScrollComedy' target='_blank' rel='noreferrer'><li className='youtube'><img src={process.env.PUBLIC_URL +"/youtube.png"} alt="" /></li></a>
                  <a href='https://www.instagram.com/squadrastandup/' target='_blank' rel='noreferrer'><li className='instagram'><img src={process.env.PUBLIC_URL +"/instagram.png"} alt="" /></li></a>
                </ul>
                </div>
                <div className="footer-header">
                    <h3 className="title">Squadra</h3>
                </div>
                <div className="copyrights">
                    <span>©2022 SQUADRA</span>
                </div>
            </div>
        </section>
    </div>
  )
}
