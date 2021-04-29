import React from 'react';
import { StyledDoTwittButton, ButtonContainer, IconContainer } from './styles.js';
import DoTwittIcon from 'components/Home/NavbarIcons/DoTwittIcon';

const DoTwittButton = ({ children, ...rest }) => {
    return (
        <ButtonContainer>
            <StyledDoTwittButton {...rest}>
                <IconContainer>
                    <DoTwittIcon width="21px" fill="white" />
                </IconContainer>
            </StyledDoTwittButton>
        </ButtonContainer>
    );
};

export default DoTwittButton;
