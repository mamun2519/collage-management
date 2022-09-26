import React from 'react';
import AboutUs from './AboutUs';
import Banner from './Banner';
import Latesnewes from './Latesnewes';
import Professor from './Professor';

const Home = () => {
      return (
            <div>
                  <Latesnewes/>
                  <Banner/>
                  <AboutUs/>
                  <Professor/>
            </div>
      );
};

export default Home;