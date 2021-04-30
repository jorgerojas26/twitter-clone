import styled from 'styled-components';
import { colors, breakpoints } from 'styles/theme';

export const Nav = styled.nav`
    width: 100%;
    margin-top: 10px;
`;

export const NavLogoContainer = styled.div`
    display: none;

    @media (min-width: ${breakpoints.mobile}) {
        display: flex;
        justify-content: center;
        place-items: center;
        place-content: center;
        cursor: pointer;
        margin-top: 10px;

        :hover > svg {
            border-radius: 9999px;
            background: ${colors.lightPrimary};
        }
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
    justify-content: space-between;

    @media (min-width: ${breakpoints.mobile}) {
        flex-direction: column;
        align-items: center;
    }
`;

export const NavLink = styled.a`
    display: flex;
    border-radius: 9999px;
    transition: background 0.2s;
    cursor: pointer;

    @media (min-width: ${breakpoints.mobile}) {
        padding: 12px;
    }

    :hover {
        background: ${colors.lightPrimary};

        > svg {
            stroke: ${colors.primary};
            stroke-width: 1px;
        }
    }

    :active {
        > svg {
            fill: ${colors.primary};
        }
    }
`;

export const NavContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;

    @media (min-width: ${breakpoints.mobile}) {
        flex-direction: column;
        width: 68px;
        padding-left: 4px;
        padding-right: 4px;
    }

    @media (min-width: 618px) {
        width: 88px;
        padding-left: 12px;
        padding-right: 12px;
    }
`;
