import styled from 'styled-components';

export const NavbarBackground = styled.div`
position: relative;
    width: 100%;
    height: 105px;
    background-color: #2B6DA8;
    display: flex;
    flex-direction: row;
`;

export const NavbarContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
`;

export const LeftSide = styled.div`
    flex: 35%;
    color: white;

    /* background-color: bisque; */
`;

export const RightSide = styled.div`
    flex: 65%;
    /* background-color: blueviolet; */
`;

export const LogoContainer = styled.div`
    width: 344px;
    height: 50px;
    padding-top: 7px;
    /* background-color: aquamarine; */
`;

export const Logo = styled.img`
    width: 344px;
    height: auto;
`;

export const NavbarLinksContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 14px;
    color: #707070;
`;

export const StyledLinks = styled.a`
    color: #2B6DA8;
    text-decoration: none;
    font-family: sans-serif;
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
`;

export const LoginContainer = styled.div`
    flex: 50%;
    display: flex;
    align-items: center;
`;

export const LogoSpanContainer = styled.div`
    width: 100%;
    height: 50px;
    background-color: white;
    display: flex;
    flex-direction: row;
`;

export const SearchSpanContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const SearchContainer = styled.div`
    flex: 35%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* padding-left: 30px; */
`;

export const SearchRightSide = styled.div`
    flex: 50%;
    display: flex;
    flex-direction: row;
    /* background-color: tomato; */
    /* padding-left: 60px; */
`;

export const LoginLinks = styled.a`
    color: white;
    text-decoration: none;
    margin: 20px;
    font-family: sans-serif;
    font-weight: bold;
    font-size: 1rem;
    white-space: nowrap;
    /* padding-left: 40px; */
    padding-left: 20px;
`;

export const SearchBar = styled.input`
    font-size: 1.1rem;
    color: grey;
    border-color: white;
    width: 200px;
    height: 32px;
    box-sizing: border-box;
    outline: none;
    border: none;
`;

export const LeftBorderRadius = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #2B6DA8;
    background-color: white;
    width: 32px;
    height: 32px;
    border-radius: 20px 0px 0px 20px;
`;

export const RightBorderRadius = styled.div`
    background-color: white;
    width: 20px;
    height: 32px;
    border-radius: 0px 20px 20px 0px;
`;

export const LogoDecoration = styled.div`
  border-right: 5px solid transparent;
  border-bottom: 5px solid white;
  border-width:50px;
  height: 14px;
  z-index: 2;
`;

export const SellExtendedContainer = styled.div`
    width: 200px;
    position: absolute;
    right: 240px;
    background-color: none;
`;

export const TabContainer = styled.div`
    background-color: #245D90;
    width: 200px;
    height: 40px;
    position: relative;
    top: 1px;
    left: -50px;
    z-index: 1;
    border-top-right-radius: 10px;
`;

export const Icons = styled.div`
width: 135px;
    color: white;
    display: flex;
    justify-content: space-around;
    padding-top: 10px;
    padding-left: 35px;
    cursor: pointer;
`;