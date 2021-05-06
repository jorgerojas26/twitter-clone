import styled from 'styled-components';

import { colors, breakpoints } from 'styles/theme';

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: flex-end;
`;

export const TimelineContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 600px;
    border-right: 1px solid ${colors.extraLightGray};
    border-left: 1px solid ${colors.extraLightGray};
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

export const TimelineHeaderWrapper = styled.div`
    height: 50px;
    border-bottom: 1px solid ${colors.extraLightGray};
    padding: 0 15px;
`;

export const TimelineHeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
    margin: 0 auto;
`;

export const TimelineHeadingContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 1;
    justify-content: center;
    height: 100%;
    width: 100%;
`;

export const TimelineHeading = styled.h2`
    font-weight: 800;
    font-size: 19px;
`;

export const HelpIconWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    min-height: 30px;
    align-selft: stretch;
    justify-content: center;
    align-items: flex-end;
`;

export const HelpIconContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    min-height: 30px;
    min-width: 30px;
    border-radius: 9999px;
    cursor: pointer;
    :hover {
        background: ${colors.lightPrimary};
    }
`;

export const DoTwittBox = styled.div`
    display: none;

    @media (min-width: ${breakpoints.mobile}) {
        display: flex;
        height: 169px;
        width: 100%;
        border-bottom: 1px solid ${colors.extraLightGray};
    }
`;

export const TwittListContainer = styled.div`
    display: flex;
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
