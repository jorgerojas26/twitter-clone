import styled from 'styled-components';

export const StyledContainer = styled.div`
    height: 100vh;
    display: flex;

    @media (min-width: 700px) {
        justify-content: center;
    }

    @media (max-width: 500px) {
        flex-direction: column-reverse;
        justify-content: center;
    }
`;
