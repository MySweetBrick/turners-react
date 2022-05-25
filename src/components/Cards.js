import React from 'react';
import {
    CardsBackground,
    CardsContainer,
    Cards,
    CardBody,
} from './styles/Cards.styles';
import {
    HeroButton,
} from './styles/Hero.styles';

function HomeCards () {
    return (
        <>
            <CardsBackground>
                <CardsContainer>
                    <Cards>
                        <CardBody>
                        Looking to get your car covered? We offer full cover including your repairs cost. Click to get your instant quote or apply now.
                        <HeroButton>Get a Quote</HeroButton>
                        </CardBody>
                    </Cards>
                    <Cards>
                        <CardBody>
                        Turners organises car and personal finance through a range of lenders. We'll work with you to get the best deal to suit your particular circumstances and affordability.
                        <HeroButton>Finance</HeroButton>
                        </CardBody>
                    </Cards>
                    <Cards>
                        <CardBody>
                        Do you want to trade in your old car?
                        Use your old car to help buy your next car. And we can even finance the difference.
                        <HeroButton>Trade-in</HeroButton>
                        </CardBody>
                    </Cards>
                    <Cards>
                        <CardBody>
                        Turners CashNow - Get an offer on the spot, and you’ll have the money in your bank account within 48 hours.
                        <HeroButton>Cash Now</HeroButton>
                        </CardBody>
                    </Cards>
                </CardsContainer>
            </CardsBackground>
        </>
    );
}

export default HomeCards;