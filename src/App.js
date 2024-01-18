import React from 'react';
import Header from './components/Header';
import SocialMediaLinks from './components/SocialMediaLinks';
import BoardMembers from './components/BoardMembers';
import Partners from './components/Partners';
import Footer from './components/Footer';
import camFont from './assets/fonts/CAMechano_v1010-Regular.woff2';

const fontFace = `
  @font-face {
    font-family: 'CAMechano';
    src: url(${camFont}) format('woff2');
    font-weight: normal;
    font-style: normal;
  }
`;

document.head.insertAdjacentHTML('beforeend', `<style>${fontFace}</style>`);


const App = () => {
  return (
    <div className="bg-black text-white min-h-screen p-4 lg:p-12">
      <Header />
      <SocialMediaLinks />
      <BoardMembers />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
