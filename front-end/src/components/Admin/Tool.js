import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Tool = ({ icon, text }) => {
  return (
    <div className='tool'>
      <FontAwesomeIcon icon={icon} size="lg" />
      <p>{text}</p>
    </div>
  )
}

export default Tool;