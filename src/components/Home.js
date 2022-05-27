import React from 'react';
import Hero from '../components//Home/Hero';
import HomeCards from '../components/Home/Cards';
import Carousel from '../components/Home/Carousel';

function Home () {
    return (
        <>
            <Hero />
            <HomeCards />
            <Carousel />
        </>
    );
}

export default Home;