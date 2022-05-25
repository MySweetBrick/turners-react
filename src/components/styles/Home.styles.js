import styled from 'styled-components';
import img from '../images/tina_1080.jpg';

export const HomeBackground = styled.div`
    width: 100%;
    height: 800px;
    background-color: #EBEBEB;
`;

export const HomeContainer = styled.div`
    width: 100%;
    height: 800px;
    display: flex;
    flex-direction: row;
`;

export const LeftSide = styled.div`
    flex: 50%;
    background-image: url(${img});
    background-size: cover;
`;

export const RightSide = styled.div`
    flex: 50%;
    /* background-color: lightcoral; */
    
`;
