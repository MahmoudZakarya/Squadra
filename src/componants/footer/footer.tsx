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
                  <li className='facebook'><img src="facebook.png" alt="" /></li>
                  <li className='youtube'><img src="youtube.png" alt="" /></li>
                  <li className='instagram'><img src="instagram.png" alt="" /></li>
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
