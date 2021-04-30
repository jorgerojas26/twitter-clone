import { StyledContainer, StyledHeader, StyledMain, StyledTimelineContainer, StyledTrendingContainer } from './styles';

const Container = ({ children }) => {
    return <StyledContainer>{children}</StyledContainer>;
};

Container.Header = ({ children }) => {
    return <StyledHeader>{children}</StyledHeader>;
};

Container.Main = ({ children }) => {
    return <StyledMain>{children}</StyledMain>;
};

Container.Main.TimelineContainer = ({ children }) => {
    return <StyledTimelineContainer>{children}</StyledTimelineContainer>;
};

Container.Main.TrendingContainer = ({ children }) => {
    return <StyledTrendingContainer>{children}</StyledTrendingContainer>;
};
export default Container;
