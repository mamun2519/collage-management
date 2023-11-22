import React from "react";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Event from "./Event";
import Footer from "./Footer";
import Gallery from "./Gallery";

import Notice from "./Notice";
import Professor from "./Professor";
import LatesNews from "./Latesnewes";
import CollageInformation from "./CollageInformation";
import Contact from "./ContectUs";

const Home = () => {
  return (
    <div>
      <Banner />
      <LatesNews />
      <CollageInformation />
      <AboutUs />
      <Professor />
      <Notice />
      <Gallery />
      <Event />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
