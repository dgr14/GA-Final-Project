import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
// import { Link as LinkScroll } from 'react-scroll'
export const Nav = styled.nav`
    width: 100%;
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    background: black;

    @media screen and (max-width: 960) {
        transition: 0.8s all ease;
    }

`
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%auto;
    padding: 0 24px;
    max-width: 1100px;
`
export const NavLogo = styled(LinkRouter)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`