import React from 'react';
import NavBar from '../components/landingPage/NavBar';
import Hero from '../components/landingPage/Hero';
import Features from '../components/landingPage/Features';
import HowItWorks from '../components/landingPage/HowItWorks';
import Signup from '../components/landingPage/Signup';
import Footer from '../components/landingPage/Footer';



const Home = () => {

    return (
            <div>
                <div className='bg-hero-bg bg-cover bg-center h-screen overflow-hidden'>
                    <NavBar />
                    <Hero />
                </div>
                <div>
                    <Features />
                    <HowItWorks />
                    <Signup />
                    <Footer />
                </div>
            </div>
    );
}

export default Home;
