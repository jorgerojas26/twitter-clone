import styled from 'styled-components';
import { colors } from 'styles/theme';

export const StyledMainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px 0 0 0;
    border: 1px solid #999;
    border-radius: 4px;
    position: relative;
    margin-right: 15px;
    border-color: rgb(196, 207, 214);

    > label {
        color: rgb(91, 112, 131);
        position: absolute;
        pointer-events: none;
        top: 15px;
        left: 10px;
        font-size: 18px;
        transition: all 0.2s;
    }

    > label.active {
        font-size: 14px;
        top: 5px;
        left: 5px;
    }

    > input {
        height: 30px;
        border: 0;
        outline: 0;
        font-size: 18px;
        padding: 0 10px;

        :focus ~ label {
            font-size: 14px;
            top: 5px;
            left: 5px;
            color: ${colors.primary};
        }
    }

    :focus-within {
        border: 2px solid ${colors.primary};
    }
`;
