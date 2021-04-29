import styled from 'styled-components';
import { colors } from 'styles/theme';

export const Nav = styled.nav``;

export const NavLogoContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 0;
    margin-top: 10px;
    cursor: pointer;

    :hover > svg {
        border-radius: 9999px;
        background: ${colors.lightPrimary};
    }
`;

export const NavItem = styled.li`
    display: flex;
    justify-content: center;

    padding: 3px 0;
`;

export const NavMenu = styled.ul`
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;

    @media (max-width: 500px) {
        width: 100%;
        background: blue;
        flex-direction: row;
    }
`;

export const NavLink = styled.a`
    border-radius: 9999px;
    padding: 10px;
    transition: background 0.2s;
    cursor: pointer;
    :hover {
        background: ${colors.lightPrimary};

        > svg {
            stroke: ${colors.primary};
            stroke-width: 1px;
        }
    }
`;

export const NavContainer = styled.div`
    display: flex;

    flex-grow: 1;
    width: 68px;

    @media (min-width: 618px) {
        width: 88px;
    }
`;
export const Header = styled.header`
    border-right: 1px solid ${colors.extraLightGray};

    display: flex;
`;
