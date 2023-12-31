import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white">
            <div className="container mx-auto">
                {/* GIF Section */}
                <div className="mb-8 flex justify-center">
                    <img src="https://media0.giphy.com/media/xEQdDzzHsVhK3Mhcqa/giphy.gif?cid=ecf05e470he8te6osar0nz20ldoecrwzsa34q32i2nptcmxt&ep=v1_gifs_related&rid=giphy.gif&ct=g" alt="Description of GIF" className="w-1/4" />
                </div>

                {/* Other footer contents can go here */}
                <p className="text-center text-sm py-48">&copy; 2023 AaltoAI. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
