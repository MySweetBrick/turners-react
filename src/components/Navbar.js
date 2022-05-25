import React, { useState } from 'react';
import {
    NavbarBackground,
    NavbarContainer,
    LeftSide,
    LogoContainer,
    Logo,
    RightSide,
    NavbarLinksContainer,
    StyledLinks,
    LoginContainer,
    LogoSpanContainer,
    SearchSpanContainer,
    SearchContainer,
    SearchRightSide,
    LoginLinks,
    SearchBar,
    LeftBorderRadius,
    RightBorderRadius,
    LogoDecoration,
    SellExtendedContainer,

} from './styles/Navbar.styles';
import LogoImg from './images/turners-cars-logo-1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { faCaravan } from '@fortawesome/free-solid-svg-icons';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import Accordian from './Accordian';

function Navbar() {

    const [extendSell, setExtendSell] = useState(false);

    return (
        <>
            <NavbarBackground>
                <LogoContainer>
                    <a href='/'>
                        <Logo src={LogoImg}></Logo>
                    </a>
                </LogoContainer>

                <NavbarContainer>
                    <SearchSpanContainer>
                        <LogoDecoration></LogoDecoration>
                        <LeftSide>
                            <FontAwesomeIcon icon={faTruck}></FontAwesomeIcon>|
                            <FontAwesomeIcon icon={faMotorcycle}></FontAwesomeIcon>|
                            <FontAwesomeIcon icon={faCaravan}></FontAwesomeIcon>
                        </LeftSide>
                        <SearchRightSide>
                            <SearchContainer>
                                <LeftBorderRadius>
                                    <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                                </LeftBorderRadius>
                                <SearchBar></SearchBar>
                                <RightBorderRadius></RightBorderRadius>
                            </SearchContainer>
                            <LoginContainer>
                                <LoginLinks href='/login'> LOGIN | REGISTER</LoginLinks>
                                <LoginLinks href='/contactUs'> CONTACT US</LoginLinks>
                            </LoginContainer>
                        </SearchRightSide>
                    </SearchSpanContainer>
                    <LogoSpanContainer>
                        <LeftSide>

                        </LeftSide>
                        <RightSide>
                            <NavbarLinksContainer>
                                <StyledLinks href='/'>Home</StyledLinks>|
                                <StyledLinks href='aboutUs'>About Us</StyledLinks>|
                                <StyledLinks href='buy'>Buy</StyledLinks>|
                                <StyledLinks onClick={() => {
                                    setExtendSell((curr) => !curr);
                                }}
                                >Sell</StyledLinks>|
                                <StyledLinks href='insurance'>Insurance</StyledLinks>|
                                <StyledLinks href='finance'>Finance</StyledLinks>
                            </NavbarLinksContainer>
                        </RightSide>

                    </LogoSpanContainer>


                </NavbarContainer>
            </NavbarBackground>
            {extendSell && (
                <SellExtendedContainer>
                    <Accordian />
                </SellExtendedContainer>
            )}
        </>
    );
}

export default Navbar;