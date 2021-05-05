import React from 'react';
import Navbar from 'components/Home/Navbar';

import {
    Layout,
    Header,
    TimelineContainer,
    TimelineHeaderWrapper,
    TimelineHeaderContainer,
    TimelineHeadingContainer,
    TimelineHeading,
    HelpIconWrapper,
    HelpIconContainer,
    WidgetContainer,
    Main,
    MainWrapper,
    MainSeparator,
    DoTwittBox,
    TwittListContainer,
} from 'components/Home/Layout';

import { StarsIcon } from 'components/Home/NavbarIcons';

import { colors } from 'styles/theme';

const Home = () => {
    return (
        <Layout>
            <Header>
                <Navbar />
            </Header>
            <Main>
                <MainWrapper>
                    <MainSeparator>
                        <TimelineContainer>
                            <TimelineHeaderWrapper>
                                <TimelineHeaderContainer>
                                    <TimelineHeadingContainer>
                                        <TimelineHeading>Inicio</TimelineHeading>
                                    </TimelineHeadingContainer>
                                    <HelpIconWrapper>
                                        <HelpIconContainer role='button'>
                                            <StarsIcon fill={colors.primary} width='1.5em' />
                                        </HelpIconContainer>
                                    </HelpIconWrapper>
                                </TimelineHeaderContainer>
                            </TimelineHeaderWrapper>
                            <DoTwittBox></DoTwittBox>
                            <TwittListContainer>Twitt List</TwittListContainer>
                        </TimelineContainer>
                        <WidgetContainer>widget container</WidgetContainer>
                    </MainSeparator>
                </MainWrapper>
            </Main>
        </Layout>
    );
};

export default Home;
