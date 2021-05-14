import styled from 'styled-components';
import { colors } from 'styles/theme';

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const MenuItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const MenuLink = styled.a`
    display: flex;
    flex-direction: column;

    transition-property: background-color;
    transition-duration: 0.2s;

    cursor: pointer;
    width: 100%;

    :hover {
        background: ${colors.superLightGray};
    }
`;

export const MenuLinkContentWrapper = styled.div`
    display: flex;
    padding: 15px 15px;
    flex-grow: 1;
`;
export const IconContainer = styled.div`
    display: inline-block;
    margin-right: 11px;
    position: relative;

    > svg {
        fill: ${colors.iconGrey};
        position: absolute;
        top: 0px;
        left: 0px;
        margin-right: 11px;
    }
`;
export const LinkTextContainer = styled.div`
    display: flex;
    flex-grow: 1;

    font-weight: 400;
    font-size: 14px;
    color: ${colors.black};

    border: 0 solid black;
    box-sizing: border-box;

    min-width: 0px;
    max-width: 100%;
    margin-left: 20px;

    line-height: 19px;
    overflow-wrap: break-word;
    text-overflow: ellipsis;
    white-space: pre-wrap;
    overflow: hidden;
`;

export const LinkText = styled.span`
    overflow-wrap: break-word;
    min-width: 0px;
    max-width: 100%;
`;

export const Separator = styled.div`
    display: flex;
    margin: 2px 0;
    height: 1px;
    width: 100%;
    background: ${colors.extraLightGray};
`;
