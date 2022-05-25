import React from 'react';
import {
    HomeBackground,
    HomeContainer,
    LeftSide,
    RightSide,

} from './styles/Home.styles';

function Home () {
    return (
        <>
            <HomeBackground>
                <HomeContainer>
                    <LeftSide></LeftSide>
                    <RightSide></RightSide>
                </HomeContainer>
            </HomeBackground>
        </>
    );
}

export default Home;