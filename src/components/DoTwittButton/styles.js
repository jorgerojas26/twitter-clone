import styled from 'styled-components';
import { colors } from 'styles/theme';

export const IconContainer = styled.div`
    display: flex;
    height: 100%;
`;

export const StyledDoTwittButton = styled.a``;

export const StyledText = styled.span`
    color: white;
    font-weight: 700;
    display: none;
    @media (min-width: 1265px) {
        display: inline;
    }
`;

export const ButtonContainer = styled.div`
    border-radius: 50%;
    background: ${colors.primary};
    padding: 13px;
    cursor: pointer;

    @media (min-width: 1265px) {
        width: 100%;
        border-radius: 9999px;
        text-align: center;

        ${IconContainer} {
            display: none;
        }
    }

    :hover {
        background: ${colors.darkerPrimary};
    }
`;
