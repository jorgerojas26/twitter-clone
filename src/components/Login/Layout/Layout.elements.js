import styled from 'styled-components';

import { breakpoints } from '../../../styles/theme';

export const StyledButtonContainer = styled.section`
    margin: 0 auto 0 0;
`;

export const StyledLogoContainer = styled.div`
    margin-right: auto;
`;

export const StyledHeadingContainer = styled.div`
    width: 100%;
    & > h1 {
        font-size: 68px;
    }
    & > h3 {
        font-size: 30px;
    }

    @media (min-width: ${breakpoints.mobile}) {
        & > h3 {
            font-size: 34px;
        }
    }
`;

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;

    @media (min-width: ${breakpoints.desktop}) {
        flex-direction: row-reverse;
    }
`;

export const StyledMainContent = styled.main`
    padding: 0 35px;
    margin: 30px auto;

    @media (max-width: ${breakpoints.mobile}) {
        & > ${StyledHeadingContainer} > h1 {
            font-size: 48px;
        }

        & > ${StyledHeadingContainer} > h3 {
            font-size: 24px;
        }
    }
    @media (min-width: ${breakpoints.desktop}) {
        margin: 10px auto 0 0;
        display: flex;
        flex-direction: column;
    }
`;

export const StyledBackgroundImageContainer = styled.div`
    margin-top: 30px;

    background-image: url('/assets/images/TwitterBackgroundImage.png');
    background-size: cover;

    display: flex;
    place-content: center;
    flex: 0.9;
    @media (min-width: ${breakpoints.desktop}) {
        height: 100vh;
        padding: 0;
        margin: 0;

        & > svg {
            max-width: 400px;
            flex-basis: 50%;
        }
    }
`;

export const StyledFormContainer = styled.div`
    display: none;

    @media (min-width: ${breakpoints.desktop}) {
        display: flex;
        margin-top: 10px;
        margin-bottom: 90px;
    }
`;
