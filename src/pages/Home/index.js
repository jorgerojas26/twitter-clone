import { useState } from 'react';

import Navbar from 'components/Navbar';
import Modal from 'components/Modal';

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
    HeaderHelpMenuWrapper,
} from './Layout';

import { StarsIcon } from 'components/Svg';

import { colors } from 'styles/theme';
import HeaderHelpMenu from 'components/HeaderHelpMenu';

const Home = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };
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
                                        <TimelineHeading>
                                            Inicio
                                            {/*This text must change on navigation. I'll leave it like that for now*/}
                                        </TimelineHeading>
                                    </TimelineHeadingContainer>
                                    <HelpIconWrapper>
                                        <HelpIconContainer onClick={handleClick} role='button'>
                                            <StarsIcon fill={colors.primary} width='1.5em' />
                                        </HelpIconContainer>
                                    </HelpIconWrapper>
                                </TimelineHeaderContainer>
                                <Modal show={showModal} close={closeModal}>
                                    <HeaderHelpMenuWrapper>
                                        <HeaderHelpMenu />
                                    </HeaderHelpMenuWrapper>
                                </Modal>
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
