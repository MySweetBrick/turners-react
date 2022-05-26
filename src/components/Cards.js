import React from 'react';
import {
    CardsBackground,
    CardsContainer,
    QuoteCard,
    FinanceCard,
    TradeCard,
    CashCard,
    Cards,
    CardBodyBackground,
    CardBody
} from './styles/Cards.styles';
import {
    HeroButton,
} from './styles/Hero.styles';

function HomeCards() {
    return (
        <>
            <CardsBackground>
                <CardsContainer>
                    <QuoteCard>
                        <CardBodyBackground>
                            <CardBody>
                                Looking to get your car covered? We offer full cover including your repairs cost. Click to get your instant quote or apply now.
                                <HeroButton>Get a Quote</HeroButton>
                            </CardBody>

                        </CardBodyBackground>
                    </QuoteCard>
                    <FinanceCard>
                        <CardBodyBackground>
                            <CardBody>
                                Turners organises personal finance through a range of lenders. We'll work to get the best deal to suit your circumstances.
                                <HeroButton>Finance</HeroButton>
                            </CardBody>
                        </CardBodyBackground>
                    </FinanceCard>
                    <TradeCard>
                        <CardBodyBackground>
                            <CardBody>
                            Do you want to trade in your old car?
                            Use your old car to help buy your next car. And we can even finance the difference.
                            <HeroButton>Trade-in</HeroButton>
                        </CardBody>
                        </CardBodyBackground>
                        
                    </TradeCard>
                    <CashCard>
                        <CardBodyBackground>
                            <CardBody>
                            Turners CashNow - Get an offer on the spot, and you’ll have the money in your bank account within 48 hours.
                            <HeroButton>Cash Now</HeroButton>
                        </CardBody>
                        </CardBodyBackground>
                        
                    </CashCard>
                </CardsContainer>
            </CardsBackground>
        </>
    );
}

export default HomeCards;