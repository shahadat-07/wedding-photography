import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import NavBar from '../NavBar/NavBar';
import Reviews from '../Reviews/Reviews';
import ServiceFeature from '../ServiceFeature/ServiceFeature';
import WeddingLocation from '../WeddingLocation/WeddingLocation';
import WeddingPlan from '../WeddingPlan/WeddingPlan';
import Footer from '../../Footer/Footer';

const Home = () => {
    return (
        <main>
            <NavBar></NavBar>
            <HeroSection></HeroSection>
            <WeddingPlan></WeddingPlan>
            <ServiceFeature></ServiceFeature>
            <WeddingLocation></WeddingLocation>
            <Reviews></Reviews>
            <Footer></Footer>
        </main>
    );
};

export default Home;