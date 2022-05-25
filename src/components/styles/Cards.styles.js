import styled from 'styled-components';
import img from '../images/caryard.jpeg';

export const CardsBackground = styled.div`
    background-image: url(${img});
    background-size: cover;
    width: 100%;
    height: 800px;
    display: flex;
`;

export const CardsContainer = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-top: 50px;
`;

export const Cards = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 8px;
    background-color: #EBEBEB;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19);

`;

export const CardBody = styled.div`
    margin: 20px;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    
`;