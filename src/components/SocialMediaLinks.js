import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';

const SocialMediaLinks = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-6">
      <a href="https://www.linkedin.com/company/aaltoai" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} className="h-14 text-white text-2xl hover:text-gray-400" />
      </a>
      <a href="https://t.me/+IX9h1s5hpysxMjE8" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTelegramPlane} className="h-20 mx-6 text-white text-2xl hover:text-gray-400" />
      </a>
      <a href="https://www.instagram.com/aaltoaisociety/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} className="h-14 text-white text-2xl hover:text-gray-400" />
      </a>
    </div>
  );
}

export default SocialMediaLinks;
