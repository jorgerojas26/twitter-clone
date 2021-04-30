import React from 'react';
import Navbar from 'components/Home/Navbar';
import Main from 'components/Home/HomeMain';
import Layout from 'components/Home/Layout';

const Home = () => {
    return (
        <Layout>
            <Layout.Header>
                <Navbar />
            </Layout.Header>
            <Layout.Main>
                <Layout.Main.TimelineContainer>timeline</Layout.Main.TimelineContainer>
                <Layout.Main.TrendingContainer>trending container</Layout.Main.TrendingContainer>
            </Layout.Main>
        </Layout>
    );
};

export default Home;
