import React from 'react';
import Navbar from 'components/Home/Navbar';
import Layout from 'components/Home/Layout';

const Home = () => {
    return (
        <Layout>
            <Layout.Header>
                <Navbar />
            </Layout.Header>
            <Layout.Main>
                <Layout.Main.TimelineContainer>
                    <Layout.Main.TimelineContainer.Header>INICIO</Layout.Main.TimelineContainer.Header>
                    <Layout.Main.TimelineContainer.TwittBoxContainer>DoTwittBox</Layout.Main.TimelineContainer.TwittBoxContainer>
                </Layout.Main.TimelineContainer>
                <Layout.Main.TrendingContainer>trending container</Layout.Main.TrendingContainer>
            </Layout.Main>
        </Layout>
    );
};

export default Home;
