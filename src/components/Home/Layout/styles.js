import styled from 'styled-components';
import { colors, breakpoints } from 'styles/theme';

export const StyledHeader = styled.header`
    border-right: 1px solid ${colors.extraLightGray};

    display: flex;
    flex-grow: 0.3;
    justify-content: center;
    @media (min-width: ${breakpoints.mobile}) {
        justify-content: flex-end;
    }

    @media (min-width: ${breakpoints.desktop}) {
        flex: 0;
        width: 68px;
    }

    @media (min-width: 1024px) {
        flex: 1;
        width: 88px;
    }

    @media (min-width: 1100px) {
        flex: 0;
        width: 88px;
    }
`;

export const StyledTimelineContainer = styled.div`
    display: flex;
    width: 100%;
    max-width: 600px;
    border-right: 1px solid ${colors.extraLightGray};
`;

export const StyledTrendingContainer = styled.div`
    display: flex;
    width: 100%;
    max-width: 290px;
    border-right: 1px solid ${colors.extraLightGray};
    border-left: 1px solid ${colors.extraLightGray};
    margin-right: 10px;
    display: none;

    @media (min-width: 1100px) {
        max-width: 350px;
    }
`;

export const StyledMain = styled.main`
    display: flex;
    justify-content: space-between;
    flex-shrink: 1;
    flew-grow: 1;

    width: 100%;
    max-width: 600px;

    @media (max-width: 500px) {
        height: 100%;
        width: 100%;
    }

    @media (min-width: 705px) {
        flex-grow: 2;
    }

    @media (min-width: ${breakpoints.desktop}) {
        max-width: 920px;
        ${StyledTrendingContainer} {
            display: flex;
        }
    }

    @media (min-width: 1100px) {
        max-width: 990px;
    }
`;

export const StyledContainer = styled.div`
    height: 100vh;
    display: flex;

    @media (max-width: ${breakpoints.mobile}) {
        flex-direction: column-reverse;
        width: 100vw;
    }
`;
