import React from 'react';
import AboutUs from './AboutUs';
import Banner from './Banner';
import Event from './Event';
import Footer from './Footer';
import Gallery from './Gallery';
import Latesnewes from './Latesnewes';
import Notice from './Notice';
import Professor from './Professor';

const Home = () => {
      return (
            <div>
                  
                  <Banner/>
                  <Latesnewes/>
                  <AboutUs/>
                  <Professor/>
                  <Notice/>
                  <Gallery/>
                  <Event/>
                  <Footer/>
            </div>
      );
};

export default Home;