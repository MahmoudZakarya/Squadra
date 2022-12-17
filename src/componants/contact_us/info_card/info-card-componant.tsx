import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import './style.css'

export default function InfoCard( {icon , text}:{icon:IconProp , text:string}) {

    const icontext:string = `fa-duotone fa-${icon}` ;

  return (
    <div>
        <div className="info-card">
            <div className="info-icon">
               <FontAwesomeIcon icon={faPhone} />            </div>
            <div className="contact-text">{text}</div>
        </div>

    </div>
  )
}
