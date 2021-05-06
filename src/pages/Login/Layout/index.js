import {
    StyledContainer,
    StyledButtonContainer,
    StyledLogoContainer,
    StyledHeadingContainer,
    StyledBackgroundImageContainer,
    StyledMainContent,
    StyledFormContainer,
} from './Layout.elements';

export const Layout = ({ children }) => {
    return <StyledContainer>{children}</StyledContainer>;
};

Layout.MainContent = ({ children }) => {
    return <StyledMainContent>{children}</StyledMainContent>;
};

Layout.BackgroundImageContainer = ({ children }) => {
    return <StyledBackgroundImageContainer>{children}</StyledBackgroundImageContainer>;
};

export const ButtonsContainer = ({ children }) => {
    return <StyledButtonContainer>{children}</StyledButtonContainer>;
};

export const LogoContainer = ({ children }) => {
    return <StyledLogoContainer>{children}</StyledLogoContainer>;
};

export const HeadingContainer = ({ children }) => {
    return <StyledHeadingContainer>{children}</StyledHeadingContainer>;
};

export const FormContainer = ({ children }) => {
    return <StyledFormContainer>{children}</StyledFormContainer>;
};
