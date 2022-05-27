import styled from 'styled-components';
import QuoteImg from '../images/telemarketer.webp';
import FinanceImg from '../images/finance.jpeg';
import TradeImg from '../images/tradein.jpeg';
import CashImg from '../images/cash.jpeg';

export const CardsBackground = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
    background-color: white;
`;

export const CardsContainer = styled.div`
    width: 90%;
    height: 400px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-top: 50px;
`;

export const QuoteCard = styled.div`
    width: 280px;
    height: 280px;
    background-image: url(${QuoteImg});
    background-size: cover;
    border-radius: 8px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19);
`;

export const FinanceCard = styled.div`
    width: 280px;
    height: 280px;
    background-image: url(${FinanceImg});
    background-size: cover;
    border-radius: 8px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19);
`;

export const TradeCard = styled.div`
    width: 280px;
    height: 280px;
    background-image: url(${TradeImg});
    background-size: cover;
    border-radius: 8px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19);
`;

export const CashCard = styled.div`
    width: 280px;
    height: 280px;
    background-image: url(${CashImg});
    background-size: cover;
    border-radius: 8px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19);
`;

export const CardBodyBackground = styled.div`
    height: 135px;
    display: flex;
    flex-direction: column;
    color: white;
    font-weight: bold;
    font-size: 1rem;
    background-color: rgba(43, 110, 168, 0.5);
    position: relative;
    top: 145px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
`;

export const CardBody = styled.div`
    margin: 5px;
    display: flex;
    flex-direction: column;
    color: white;
    font-weight: bold;
    font-size: 1rem;
`;