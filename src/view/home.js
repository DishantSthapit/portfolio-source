import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Banner from '../components/Banner/Banner';
import  AlternateNavBar from '../components/AlternateNavBar/AlternateNavBar';


function Home() {
  return (
    <div>
        <NavBar />
        <AlternateNavBar name="Dishant Man Sthapit" role="Frontend Developer"/>
        <Banner email="mailto:dishantsthapit@gmail.com" phone="tel:0410330140"/>
      </div>
  );
}

export default Home;
