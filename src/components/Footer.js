import React from 'react';
import {
    FooterBackground, 
    FooterInnerContainer,
    FooterContents,
    ContainerLinks,
    ContainerHeader,
    IconContainer,
    Image,
} from './styles/Footer.styles';
import {
    SearchBar,
    SearchContainer,
    LeftBorderRadius,
    RightBorderRadius,

} from './styles/Navbar.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Instagram from './images/instagram.jpeg';
import Facebook from './images/facebook.png';
import Linkedin from './images/linkedin.png';

function Footer() {
    return (
        <>
            <FooterBackground>
                <FooterInnerContainer>
                    <FooterContents>
                        <ContainerLinks>Home</ContainerLinks>
                        <ContainerLinks>About Us</ContainerLinks>
                        <ContainerLinks>Buy</ContainerLinks>
                        <ContainerLinks>Sell</ContainerLinks>
                        <ContainerLinks>Insurance</ContainerLinks>
                        <ContainerLinks>Finance</ContainerLinks>
                    </FooterContents>
                    <FooterContents>
                        <ContainerLinks>FAQS</ContainerLinks>
                        <ContainerLinks>Contact Us</ContainerLinks>
                        <ContainerLinks>Careers</ContainerLinks>
                        <ContainerLinks>Policy</ContainerLinks>
                        <ContainerLinks>Terms & Conditions</ContainerLinks>
                    </FooterContents>
                    <FooterContents>
                        <ContainerLinks>Trucks & Machinery</ContainerLinks>
                        <ContainerLinks>Damaged & End of Line Vehicles</ContainerLinks>
                        <ContainerLinks>Motorcycles</ContainerLinks>
                        <ContainerLinks>Buses, Caravans & Motorhomes</ContainerLinks>
                        <ContainerLinks>General Goods</ContainerLinks>
                    </FooterContents>
                    <FooterContents>
                        <ContainerHeader>Sign up for latest offers, <br />
                        auctions, & more!</ContainerHeader>
                        {/* <SearchBar type='text' placeholder='Email address here'></SearchBar> */}
                        <SearchContainer>
                                <LeftBorderRadius>
                                    <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
                                </LeftBorderRadius>
                                <SearchBar type='text' placeholder='Email address here...'></SearchBar>
                                <RightBorderRadius></RightBorderRadius>
                            </SearchContainer>
                            <IconContainer>
                                <Image src={ Facebook }></Image>
                                <Image src={ Instagram }></Image>
                                <Image src={ Linkedin }></Image>
                            </IconContainer>
                    </FooterContents>
                </FooterInnerContainer>
            </FooterBackground>
        </>
    );
}

export default Footer;