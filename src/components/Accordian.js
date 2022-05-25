import React from 'react';
import {
    AccordianBackground,
    AccordionWrapper,
    TopAccordianLinkContainer,
    MiddleAccordianLinkContainer,
    BottomAccordianLinkContainer,
    InternalWrapper,
    Button,
    LeftSide,
    RightSide,
    SellLinks,
} from './styles/Accordian.styles';

function Accordian() {

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
            {/* <AccordianBackground> */}
                <AccordionWrapper>
                    <TopAccordianLinkContainer>
                        <LeftSide>
                            <p>Options to Sell</p>
                        </LeftSide>
                        <RightSide>
                            <Button onClick={handleClick}>
                                {/* + */}
                                {/* {open ? <> &#45;</> : <> &#43; </>} */}
                                {open ? <> -</> : <> + </>}
                            </Button>
                        </RightSide>
                    </TopAccordianLinkContainer>
                    <InternalWrapper open={open}>
                        <div>
                            <SellLinks>Trade In</SellLinks>
                            <SellLinks>Cash Now</SellLinks>
                            <SellLinks>Auctions</SellLinks>
                        {/* <p>Trade In</p>
                        <p>Cash Now</p>
                        <p>Auctions</p> */}

                        </div>

                    </InternalWrapper>

                    <MiddleAccordianLinkContainer>
                        <LeftSide>
                    <p>Book an Appraisal</p>
                        </LeftSide>
                        <RightSide></RightSide>
                    </MiddleAccordianLinkContainer>
                    <BottomAccordianLinkContainer>
                        <LeftSide>
                    <p>Selling FAQs</p>
                        </LeftSide>
                        <RightSide></RightSide>
                    </BottomAccordianLinkContainer>

                </AccordionWrapper>
            {/* </AccordianBackground> */}

        </>
    );
}

// Accordion.defaultProps = {
//     title    : 'title',
//     subTitle : 'subtitle',
//     btnText  : 'Read more >>'
// };

export default Accordian;