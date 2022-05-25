import React from 'react';
import {
    HomeBackground,
    HomeContainer,
    LeftSide,
    RightSide,
    HeroBodyContainer,
    ButtonContainer,
    HeroButton,
    HeroHeader,
    HeroBody,
    BodyLinks,
} from './styles/Hero.styles';

function Home() {
    return (
        <>
            <HomeBackground>
                <HomeContainer>
                    <LeftSide></LeftSide>
                    <RightSide>
                        <HeroBodyContainer>
                            <HeroHeader>1000's of Quality Cars for Sale</HeroHeader>
                            <HeroBody>
                                <nobr>Turners Cars is the largest used car network in New Zealand with <br />19 <BodyLinks href=''>car dealers</BodyLinks> locations nationwide. </nobr><br />

                                With a huge range of around 3,000 cars for sale (and 1,500 being made ready for sale at any one time) there is truly something for everyone. <br />
                                <br />
                                <nobr>We’ve been helping Kiwis buy and sell <BodyLinks>used cars</BodyLinks> for over 50 <br />
                                    years. And if you want <BodyLinks href=''>car finance</BodyLinks> or <BodyLinks href=''>car insurance</BodyLinks>, we can sort <br />
                                    that out for you as well. </nobr><br />
                            </HeroBody>
                            <ButtonContainer>
                                <HeroButton>Book Consultation</HeroButton>
                            </ButtonContainer>
                        </HeroBodyContainer>
                    </RightSide>
                </HomeContainer>
            </HomeBackground>
        </>
    );
}

export default Home;