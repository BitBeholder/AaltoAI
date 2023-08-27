import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';

const SocialMediaLinks = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-6 py-24">
      <a href="https://www.instagram.com/aaltoaisociety/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} className="text-white text-2xl hover:text-gray-400" />
      </a>
      <a href="https://www.linkedin.com/company/aaltoai" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} className="text-white text-2xl hover:text-gray-400" />
      </a>
      <a href="https://t.me/+PYA-PJ6tOcE5NjZk" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTelegramPlane} className="text-white text-2xl hover:text-gray-400" />
      </a>
    </div>
  );
}

export default SocialMediaLinks;
