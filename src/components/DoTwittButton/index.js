import React from 'react';
import { StyledDoTwittButton, ButtonContainer, IconContainer, StyledText } from './styles.js';

import { DoTwittIcon } from 'components/Svg';

const DoTwittButton = ({ children, ...rest }) => {
    return (
        <ButtonContainer>
            <StyledDoTwittButton {...rest}>
                <IconContainer>
                    <DoTwittIcon width='21px' fill='white' />
                </IconContainer>
                <StyledText>{children}</StyledText>
            </StyledDoTwittButton>
        </ButtonContainer>
    );
};

export default DoTwittButton;
