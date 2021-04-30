import styled from 'styled-components';
import { breakpoints } from 'styles/theme';

export const StyledContainer = styled.div`
    height: 100vh;
    display: flex;

    @media (min-width: 700px) {
        justify-content: center;
    }

    @media (max-width: ${breakpoints.mobile}) {
        flex-direction: column-reverse;
        width: 100vw;
    }
`;
