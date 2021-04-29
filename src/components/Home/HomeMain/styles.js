import styled from 'styled-components';
import { colors } from 'styles/theme';
export const StyledMain = styled.main`
    display: flex;
    flex-shrink: 1;
    flew-grow: 1;
    border-right: 1px solid ${colors.extraLightGray};

    width: 100%;
    max-width: 600px;

    background: green;

    @media (min-width: 705px) {
        flex-grow: 2;
    }

    @media (max-width: 500px) {
        height: 100%;
    }
`;
