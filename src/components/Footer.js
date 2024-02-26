import React from "react";
import rules from "./aaltoai-rules.pdf";
import privacy_notive from "./AaltoAI-Privacy_Notice-(GDPR).pdf";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto">
        {/* GIF Section */}
        <div className="mb-8 flex justify-center">
          <img
            src="https://media0.giphy.com/media/xEQdDzzHsVhK3Mhcqa/giphy.gif?cid=ecf05e470he8te6osar0nz20ldoecrwzsa34q32i2nptcmxt&ep=v1_gifs_related&rid=giphy.gif&ct=g"
            alt="Description of GIF"
            className="w-1/4"
          />
        </div>
        <p className="text-center text-sm py-48 w-full">
          <a href={rules} target="_blank">
            Download Rules (Finnish)
          </a>
        </p>
        <p className="text-center text-sm py-48 w-full">
          <a href={privacy_notive} target="_blank">
            Download Privacy Notice (Finnish)
          </a>
        </p>

        {/* Other footer contents can go here */}
        <p className="text-center text-sm py-48">
          &copy; 2023 AaltoAI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
