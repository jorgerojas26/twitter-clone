import styled from 'styled-components';
import { colors } from 'styles/theme';

export const StyledButton = styled.div`
    display: flex;
    justify-content: center;
    place-items: center;
    font-weight: bold;
    padding: 8px 16px;
    border: 1px solid;
    border-radius: 9999px;
    cursor: pointer;

    color: ${(props) => (props.primary ? 'white' : colors.primary)};
    background: ${(props) => (props.primary ? colors.primary : 'none')};

    :hover {
        background: ${colors.lightPrimary};
        transition: background 0.3s;
    }

    & > svg {
        margin-right: 8px;
    }
`;
