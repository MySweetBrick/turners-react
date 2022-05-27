import React from 'react';
import {
    CarouselBackground,
    HeaderContainer,
    CarouselHeader,
} from '../styles/Carousel.styles';
import Slider from '../Slider/Slider';


function Carousel() {
    return (
        <>
            <CarouselBackground>
                <HeaderContainer>
                    <CarouselHeader>LIVE AUCTIONS</CarouselHeader>
                </HeaderContainer>
                <Slider />
            </CarouselBackground>
        </>
    );
}

export default Carousel;