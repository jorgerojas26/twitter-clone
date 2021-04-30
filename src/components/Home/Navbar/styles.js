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
    align-items: flex-end;

    @media (min-width: ${breakpoints.mobile}) {
        flex-direction: column;
        align-items: center;
    }
`;

export const NavLink = styled.a`
    border-radius: 9999px;
    transition: background 0.2s;
    cursor: pointer;
    padding: 12px 0;
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

    @media (min-width: ${breakpoints.mobile}) {
        flex-direction: column;
        width: 68px;
    }

    @media (min-width: 618px) {
        width: 88px;
    }
`;
export const Header = styled.header`
    border-right: 1px solid ${colors.extraLightGray};

    display: flex;
`;
