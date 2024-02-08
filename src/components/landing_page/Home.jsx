import React from 'react';
import NavBar from './NavBar';
import Hero from './Hero';
import Features from './Features';
import HowItWorks from './HowItWorks';
import Signup from './Signup';
import Footer from './Footer';


const Home = () => {

    return (
        <div>
            <div className='bg-hero-bg bg-cover bg-center h-screen'>
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