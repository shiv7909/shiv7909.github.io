import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ValueProp from '../components/ValueProp';
import Categories from '../components/Categories';
import SellingAssistance from '../components/SellingAssistance';
import DreamBuilding from '../components/DreamBuilding';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ValueProp />
      <Categories />
      <DreamBuilding />
      <SellingAssistance />
      <Footer />
    </>
  );
};

export default Home;
