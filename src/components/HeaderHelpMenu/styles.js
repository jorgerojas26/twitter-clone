import styled from 'styled-components';

import { colors } from 'styles/theme';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px 19px;

    border-bottom: 1px solid ${colors.extraLightGray};
`;

export const HeaderIconContainer = styled.div`
    display: inline-block;
    padding-bottom: 11px;
    max-width: 100%;
    text-align: center;
`;

export const HeaderTextContainer = styled.div`
    display: inline;

    font-size: 19px;
    font-weight: 700;
    text-align: center;
    line-height: 19px;
    overflow-wrap: break-word;
    white-space: pre-wrap;

    min-width: 0px;
`;

export const HeaderText = styled.span`
    overflow-wrap: break-word;
    min-width: 0px;
`;

export const MenuItem = styled.div`
    display: flex;
    padding: 15px;

    cursor: pointer;

    :hover {
        background: ${colors.superLightGray};
    }
`;

export const MenuItemIconContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 11px;

    > svg {
        fill: ${colors.iconGrey};
    }
`;

export const MenuItemTextContainer = styled.div`
    display: flex;
    flex-direction: column;

    font-size: 14px;
    font-weight: 400;
    line-height: 19px;
    overflow-wrap: break-word;
    min-width: 0px;
    white-space: pre-wrap;
`;

export const MenuItemSubTextContainer = styled.div`
    display: inline;
    margin-top: 4px;
    font-size: 12px;
    line-height: 15px;
    color: ${colors.iconGrey};
    font-weight: 400;
    overflow-wrap: break-word;
    min-width: 0px;
    white-space: pre-wrap;
`;

export const MenuItemText = styled.span`
    overflow-wrap: break-word;
    min-width: 0px;
`;
