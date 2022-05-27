import styled from 'styled-components';

export const AccordionWrapper = styled.div`
    width: 200px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    border-radius: 10px;
    border: solid 1px #2B6DA8;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19);
    height: auto;
    text-align: center;
`;

export const InternalWrapper = styled.div`
    width: 100%;
    max-height: ${(props) => (props.open ? '200px' : '0')};
    transition: all 0.4s ease-in-out;
    overflow: hidden;
    background-color: #AB0000;
    color: white;
`;

export const Button = styled.button`
    margin: 10px;
    border: none;
    background: none;
`;

export const TopAccordianLinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    &:hover {
        background-color: #2B6DA8;
        color: white;
        border-top-left-radius: 9px;
        border-top-right-radius: 9px;
    }
    &:hover ${Button} {
        color: white;
    }
`;

export const MiddleAccordianLinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    &:hover {
        background-color: #2B6DA8;
        color: white;
    }
    &:hover ${Button} {
        color: white;
    }
`;

export const BottomAccordianLinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    &:hover {
        background-color: #2B6DA8;
        color: white;
        border-bottom-left-radius: 9px;
        border-bottom-right-radius: 9px;
    }
    &:hover ${Button} {
        color: white;
    }
`;

export const LeftSide = styled.div`
    flex: 90%;
    display: flex;
    justify-content: center;
`;

export const RightSide = styled.div`
    flex: 10%;
    display: flex;
    justify-content: center;
`;

export const SellLinks = styled.p`
    &:hover {
        font-weight: bolder;
    }
`;