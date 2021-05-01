import {
    StyledContainer,
    StyledHeader,
    StyledMain,
    StyledTimelineContainer,
    StyledTrendingContainer,
    StyledMainHeader,
    StyledDoTwittBox,
} from './styles';

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

Container.Main.TimelineContainer.Header = ({ children }) => {
    return <StyledMainHeader>{children}</StyledMainHeader>;
};

Container.Main.TimelineContainer.TwittBoxContainer = ({ children }) => {
    return <StyledDoTwittBox>{children}</StyledDoTwittBox>;
};

Container.Main.TrendingContainer = ({ children }) => {
    return <StyledTrendingContainer>{children}</StyledTrendingContainer>;
};
export default Container;
