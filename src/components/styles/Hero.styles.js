import styled from 'styled-components';
import img from '../images/tina_1080.jpg';

export const HomeBackground = styled.div`
    width: 100%;
    height: 400px;
    background-color: #EBEBEB;
    display: flex;
    justify-content: center;
    align-items: center;

`;

export const HomeContainer = styled.div`
    width: 90%;
    height: 370px;
    display: flex;
    flex-direction: row;
    background-color: white;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19);
    border-radius: 10px;
`;

export const LeftSide = styled.div`
    flex: 50%;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: 600px;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
`;

export const RightSide = styled.div`
    flex: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const HeroBodyContainer = styled.div`

`;

export const HeroHeader = styled.h3`
    font-family: sans-serif;
`;

export const HeroBody = styled.div`
    font-size: 1rem;
    font-family: sans-serif;
    padding: 20px;
`;

export const BodyLinks = styled.a`
    text-decoration: none;
    color: #2B6DA8;
`;

export const HeroButton = styled.button`
    background-color: #2B6DA8;
    color: white;
    font-size: 1.3rem;
    font-weight: bold;
    border-radius: 4px;
    white-space: nowrap;
    margin: 10px 40px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19);
`;

export const ButtonContainer = styled.div`
`;