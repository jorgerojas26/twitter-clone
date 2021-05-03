import React from 'react';
import Navbar from 'components/Home/Navbar';

import {
    Layout,
    Header,
    TimelineContainer,
    TimelineHeader,
    WidgetContainer,
    Main,
    MainWrapper,
    MainSeparator,
    DoTwittBox,
    TwittListContainer,
} from 'components/Home/Layout';

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
                            <TimelineHeader>INICIO</TimelineHeader>
                            <DoTwittBox>DoTwittBox</DoTwittBox>
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
