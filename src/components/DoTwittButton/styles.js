import styled from 'styled-components';
import { colors } from 'styles/theme';

export const ButtonContainer = styled.div`
    border-radius: 50%;
    background: ${colors.primary};
    padding: 13px;
    cursor: pointer;

    :hover {
        background: ${colors.darkerPrimary};
    }
`;

export const IconContainer = styled.div`
    display: flex;
    height: 100%;
`;
export const StyledDoTwittButton = styled.a``;
