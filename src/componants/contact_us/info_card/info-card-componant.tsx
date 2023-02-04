import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';
import './style.css'

export default function InfoCard( {icon , text}:{icon:IconProp , text:string}) {


  return (
    <div>
        <div className="info-card">
            <div className="info-icon">
               <FontAwesomeIcon icon={icon} />            </div>
            <div className="contact-text">{text}</div>
        </div>

    </div>
  )
}
