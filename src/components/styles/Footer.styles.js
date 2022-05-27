import styled from 'styled-components';

export const FooterBackground = styled.div`
    width: 100%;
    height: 310px;
    background-color: #EBEBEB;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const FooterInnerContainer = styled.div`
    width: 90%;
    height: 310px;
    display: flex;
    justify-content: space-around;
`;

export const FooterContents = styled.div`
    height: 140px;
    display: flex;
    flex-direction: column;
    align-items: left;
    padding-top: 80px;
    justify-content: space-between;
`;

export const ContainerHeader = styled.h1`
    font-family: sans-serif;
    text-transform: uppercase;
    font-size: .9rem;
    color: #707070;
`;

export const ContainerLinks = styled.a`
    font-family: sans-serif;
    text-decoration: none;
    color: #2B6DA8;
    font-size: 1rem;
    font-weight: bold;
    padding: 4px;
`;

export const IconContainer = styled.div`
display: flex;
flex-direction: row;
`;

export const Image = styled.img`
    width: 40px;
    height: 40px;
    margin: 10px 10px 10px 0px;
    border-radius: 8px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19);
`;

export const ContactContainer = styled.div`
    padding-top: 70px;
`;