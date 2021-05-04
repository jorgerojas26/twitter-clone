import styled from 'styled-components';

import { colors, breakpoints } from 'styles/theme';

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: flex-end;
    z-index: 3;
`;

export const TimelineContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 600px;
    border-right: 1px solid ${colors.extraLightGray};
`;

export const WidgetContainer = styled.div`
    display: none;
    width: 100%;
    max-width: 290px;
    border-right: 1px solid ${colors.extraLightGray};
    border-left: 1px solid ${colors.extraLightGray};
    margin-right: 10px;

    @media (min-width: 988px) {
        display: flex;
        flex-direction: column;
    }

    @media (min-width: 1100px) {
        max-width: 350px;
    }
`;

export const TrendingContainer = styled.div`
    background: black;
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    flex-shrink: 1;
    flex-grow: 1;
    height: 100%;

    @media (min-width: ${breakpoints.mobile}) {
        align-items: stretch;
        width: 100%;
    }

    @media (min-width: 688px) {
        align-items: flex-start;
        width: auto;
    }
`;

export const MainWrapper = styled.div`
    display: flex;
    flex-shrink: 1;
    flex-grow: 1;
    width: 100%;

    @media (min-width: 688px) {
        width: 600px;
    }

    @media (min-width: 988px) {
        width: 920px;
    }

    @media (min-width: 1100px) {
        width: 990px;
    }
`;

export const MainSeparator = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    flew-grow: 1;
    width: 100%;
    min-height: 100%;
`;

export const TimelineHeader = styled.div`
    height: 53px;
    width: 100%;
    color: white;
    background: black;
    border-bottom: 1px solid ${colors.extraLightGray};
`;

export const DoTwittBox = styled.div`
    display: none;

    @media (min-width: ${breakpoints.mobile}) {
        display: flex;
        height: 169px;
        width: 100%;
        background: pink;
        border-bottom: 1px solid ${colors.extraLightGray};
    }
`;

export const TwittListContainer = styled.div`
    display: flex;
    background: purple;
    height: 100%;
    width: 100%;
    border-top: 1px solid ${colors.extraLightGray};

    @media (min-width: ${breakpoints.mobile}) {
        margin-top: 10px;
    }
`;

export const Layout = styled.div`
    display: flex;
    flex-direction: column-reverse;
    height: 100vh;
    width: 100%;

    @media (min-width: ${breakpoints.mobile}) {
        flex-direction: row;
    }
`;
