import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import HomeMain from './HomeMain';

import footerLogo from '../../assets/images/logos/footer-logo.png';

const HomePage = () => {
  return (
    <>
      <Header
        parentMenu='home'
        topbarEnable='enable'
      />
      <HomeMain />
      <Footer
        footerLogo={footerLogo}
      />
    </>
  );
}

export default HomePage;
