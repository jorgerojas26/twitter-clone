import React from 'react';
import Navbar from 'components/Home/Navbar';
import Main from 'components/Home/HomeMain';
import Layout from 'components/Home/Layout';

const Home = () => {
    return (
        <Layout>
            <Navbar />
            <Main>main content</Main>
        </Layout>
    );
};

export default Home;
