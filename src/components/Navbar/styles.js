import styled from 'styled-components';

import { colors, breakpoints } from 'styles/theme';

export const WidthManager = styled.div`
    display: flex;
    width: 100%;
    position: relative;

    @media (min-width: ${breakpoints.mobile}) {
        width: 68px;
    }

    @media (min-width: 600px) {
        width: 88px;
    }

    @media (min-width: 1265px) {
        width: 275px;
    }
`;

export const MainWrapper = styled.div`
    display: flex;
    width: 100%;

    @media (min-width: ${breakpoints.mobile}) {
        width: inherit;
        height: 100%;
        position: fixed;
        top: 0;
    }
`;

export const NavProfileSeparator = styled.div`
    display: flex;
    width: 100%;
    position: relative;

    @media (min-width: ${breakpoints.mobile}) {
        width: 68px;
        overflow-y: auto;
        justify-content: space-between;
        height: 100%;
        padding-left: 4px;
        padding-right: 4px;
        flex-direction: column;
    }

    @media (min-width: 600px) {
        width: 88px;
        padding-left: 11px;
        padding-right: 11px;
    }
    @media (min-width: 988px) {
        width: 68px;
        padding-left: 4px;
        padding-right: 4px;
    }

    @media (min-width: 1265px) {
        width: 275px;
        padding-left: 11px;
        padding-right: 11px;
    }
`;

export const NavWrapper = styled.div`
    display: flex;
    border-top: 1px solid ${colors.extraLightGray};
    width: 100%;
    align-items: center;
    position: relative;

    @media (min-width: ${breakpoints.mobile}) {
        flex-direction: column;
    }
`;

export const AccountMenuContainer = styled.div``;

export const LogoContainer = styled.div`
    display: none;

    @media (min-width: ${breakpoints.mobile}) {
        display: flex;
        flex-direction: column;
    }

    @media (min-width: 1265px) {
        align-items: flex-start;
    }
`;

export const NavContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: ${breakpoints.mobile}) {
        margin-top: 2px;
        margin-bottom: 4px;
        align-items: center;
    }
`;

export const DoTwittButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    align-items: center;
    margin: 15px 0;

    @media (max-width: ${breakpoints.mobile}) {
        ${(props) =>
            props.dissapearOnMobile && {
                display: 'none',
            }}
    }
`;

export const Nav = styled.nav`
    display: flex;
    max-height: 16vh;
    height: 3.5rem;

    width: 100%;

    @media (min-width: ${breakpoints.mobile}) {
        flex-direction: column;
        align-items: center;
        height: 100%;
        max-height: 100%;
    }

    @media (min-width: 1265px) {
        align-items: flex-start;
    }
`;

export const NavLink = styled.a`
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    user-select: none;
    pointer-events: auto;
    online-style: none;

    justify-content: center;
    align-items: center;

    border-bottom: 2px solid rgba(0, 0, 0, 0);

    cursor: pointer;
    outline-style: none;

    @media (min-width: ${breakpoints.mobile}) {
        width: 100%;
    }

    @media (min-width: 1265px) {
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
    }

    ${(props) =>
        props.dissapearOnMobile &&
        `
        @media (max-width: ${breakpoints.mobile}){
        display: none;
}
    `}
`;

export const IconContainer = styled.div`
    display: inline-block;

    ${(props) => {
        if (props.iconVariant) {
            return `

            > :nth-child(2){
                display: none;
            }

            @media (min-width: 988px){
                > :nth-child(1){
                display: none;
            }

            > :nth-child(2){
                display: flex;
            }

            }
            `;
        }
    }}
`;

export const NavLinkTextContainer = styled.div`
    line-height: 23px;
    font-size: 19px;
    font-weight: 700;
    overflow-wrap: break-word;
    min-width: 0;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: none;

    margin: 0 15px 0 19px;

    @media (min-width: 1265px) {
        display: inline-block;
    }
`;

export const NavLinkText = styled.span`
    overflow-wrap: break-word;
`;

export const NavLinkContentWrapper = styled.div`
    display: flex:
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
    padding: 11px;
    border-radius: 9999px;
    transition-property: background-color, box-shadow;
    transition-duration: 0.2s;

    :hover {
        background: ${colors.lightPrimary};
        color: ${colors.primary}
        
    }

    :hover ${IconContainer}{
        > svg {
            color: ${colors.primary};
        }
    }

    &.active {
        > ${IconContainer} svg {
            fill: ${colors.primary};
        }

        > ${NavLinkTextContainer} {
            color: ${colors.primary};
        }
    }

`;

export const ProfileMenuWrapper = styled.div`
    display: none;

    @media (min-width: ${breakpoints.mobile}) {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 11px 0;
    }
`;

export const ProfileMenuContainer = styled.div`
    display: flex;
    align-items: center;
    transition-property: background-color, box-shadow;
    transition-duration: 0.2s;
    border-radius: 9999px;
    cursor: pointer;
    padding: 11px;
    :hover {
        background: ${colors.lightPrimary};
    }

    max-width: 100%;
`;

export const AvatarContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 38px;
    min-height: 38px;
    background: grey;
    border-radius: 9999px;
`;

export const UserIDWrapper = styled.div`
    display: none;
    flex-direction: column;
    flex-shrink: 1;
    min-width: 0px;

    @media (min-width: 1265px) {
        display: flex;
    }
`;
export const UserInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 1;
    margin: 0 11px;
`;

export const UserFullNameContainer = styled.div`
    display: inline;

    font-size: 14px;
    font-weight: 700;

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    overflow-wrap: break-word;

    min-width: 0px;
`;
export const UsernameContainer = styled.div`
    display: inline;

    font-size: 14px;
    font-weight: 400;
    color: ${colors.darkGray};

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    overflow-wrap: break-word;

    min-width: 0px;
`;

export const UserFullNameText = styled.span``;

export const UsernameText = styled.span``;

export const ThreeDotsIconContainer = styled.div`
    display: none;
    flex-grow: 1;
    align-items: flex-end;

    @media (min-width: 1265px) {
        display: flex;
    }
`;

export const NavMenuModalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    position: fixed;
    top: 42px;
    background: white;
    box-shadow: ${colors.shadow} 0px 0px 15px, ${colors.shadow} 0px 0px 3px 1px;
    border-radius: 4px;

    margin-left: 10px;
    max-width: 366px;
    overscroll-behavior: contain;
    overflow-y: auto;
    overflow: hidden;
    z-index: 3;
`;

export const ProfileMenuModalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 81px;
    background: white;
    min-height: 200px;
    min-width: 200px;
`;
