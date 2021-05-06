import { useState } from 'react';

import { colors } from 'styles/theme';

import {
    WidthManager,
    MainWrapper,
    NavProfileSeparator,
    NavWrapper,
    LogoContainer,
    NavContainer,
    DoTwittButtonContainer,
    Nav,
    NavLink,
    NavLinkContentWrapper,
    IconContainer,
    NavLinkTextContainer,
    NavLinkText,
    ProfileMenuWrapper,
    ProfileMenuContainer,
    AvatarContainer,
    UserIDWrapper,
    UserInfoContainer,
    UserFullNameContainer,
    UsernameContainer,
    UserFullNameText,
    UsernameText,
    ThreeDotsIconContainer,
    NavMenuWrapper,
} from './styles';

import {
    TwitterLogo,
    HomeIcon,
    ExploreIcon,
    BellIcon,
    MessageIcon,
    SavedIcon,
    ListIcon,
    ProfileIcon,
    MoreOptionsIcon,
    HashtagIcon,
    ThreeDotsIcon,
} from 'components/Svg';

import DoTwittButton from 'components/DoTwittButton';

import Modal from 'components/Modal';

import NavMenu from 'components/NavMenu';

const Navbar = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <WidthManager>
            <MainWrapper>
                <NavProfileSeparator>
                    <NavWrapper>
                        <NavLink>
                            <NavLinkContentWrapper>
                                <LogoContainer>
                                    <TwitterLogo fill={colors.primary} height='30px' />
                                </LogoContainer>
                            </NavLinkContentWrapper>
                        </NavLink>
                        <NavContainer>
                            <Nav>
                                <NavLink>
                                    <NavLinkContentWrapper>
                                        <IconContainer>
                                            <HomeIcon fill='transparent' stroke='black' height='24px' />
                                        </IconContainer>
                                        <NavLinkTextContainer>
                                            <NavLinkText>Inicio</NavLinkText>
                                        </NavLinkTextContainer>
                                    </NavLinkContentWrapper>
                                </NavLink>
                                <NavLink>
                                    <NavLinkContentWrapper>
                                        <IconContainer iconVariant>
                                            <ExploreIcon fill='transparent' stroke='black' height='24px' />
                                            <HashtagIcon fill='transparent' stroke='black' height='24px' />
                                        </IconContainer>
                                        <NavLinkTextContainer>
                                            <NavLinkText>Explorar</NavLinkText>
                                        </NavLinkTextContainer>
                                    </NavLinkContentWrapper>
                                </NavLink>
                                <NavLink>
                                    <NavLinkContentWrapper>
                                        <IconContainer>
                                            <BellIcon fill='transparent' stroke='black' height='24px' />
                                        </IconContainer>
                                        <NavLinkTextContainer>
                                            <NavLinkText>Notificaciones</NavLinkText>
                                        </NavLinkTextContainer>
                                    </NavLinkContentWrapper>
                                </NavLink>
                                <NavLink>
                                    <NavLinkContentWrapper>
                                        <IconContainer>
                                            <MessageIcon fill='transparent' stroke='black' height='24px' />
                                        </IconContainer>
                                        <NavLinkTextContainer>
                                            <NavLinkText>Mensajes</NavLinkText>
                                        </NavLinkTextContainer>
                                    </NavLinkContentWrapper>
                                </NavLink>
                                <NavLink dissapearOnMobile>
                                    <NavLinkContentWrapper>
                                        <IconContainer>
                                            <SavedIcon height='24px' />
                                        </IconContainer>
                                        <NavLinkTextContainer>
                                            <NavLinkText>Guardados</NavLinkText>
                                        </NavLinkTextContainer>
                                    </NavLinkContentWrapper>
                                </NavLink>
                                <NavLink dissapearOnMobile>
                                    <NavLinkContentWrapper>
                                        <IconContainer>
                                            <ListIcon height='24px' />
                                        </IconContainer>
                                        <NavLinkTextContainer>
                                            <NavLinkText>Listas</NavLinkText>
                                        </NavLinkTextContainer>
                                    </NavLinkContentWrapper>
                                </NavLink>
                                <NavLink dissapearOnMobile>
                                    <NavLinkContentWrapper>
                                        <IconContainer>
                                            <ProfileIcon height='24px' />
                                        </IconContainer>
                                        <NavLinkTextContainer>
                                            <NavLinkText>Perfil</NavLinkText>
                                        </NavLinkTextContainer>
                                    </NavLinkContentWrapper>
                                </NavLink>
                                <NavLink dissapearOnMobile>
                                    <NavLinkContentWrapper onClick={openModal}>
                                        <IconContainer>
                                            <MoreOptionsIcon height='24px' />
                                        </IconContainer>
                                        <NavLinkTextContainer>
                                            <NavLinkText>Más opciones</NavLinkText>
                                        </NavLinkTextContainer>
                                    </NavLinkContentWrapper>
                                </NavLink>
                            </Nav>
                        </NavContainer>
                        <DoTwittButtonContainer dissapearOnMobile>
                            <DoTwittButton>Twittear</DoTwittButton>
                        </DoTwittButtonContainer>
                    </NavWrapper>
                    <ProfileMenuWrapper>
                        <ProfileMenuContainer>
                            <AvatarContainer></AvatarContainer>
                            <UserIDWrapper>
                                <UserInfoContainer>
                                    <UserFullNameContainer>
                                        <UserFullNameContainer>
                                            <UserFullNameText>Jorge Rojas</UserFullNameText>
                                        </UserFullNameContainer>
                                    </UserFullNameContainer>
                                    <UsernameContainer>
                                        <UsernameText>@Jorgerojas26666666666666666666666666666666666666666666666666666666666</UsernameText>
                                    </UsernameContainer>
                                </UserInfoContainer>
                            </UserIDWrapper>
                            <ThreeDotsIconContainer>
                                <ThreeDotsIcon height='24px' />
                            </ThreeDotsIconContainer>
                        </ProfileMenuContainer>
                    </ProfileMenuWrapper>
                </NavProfileSeparator>
            </MainWrapper>
            <Modal show={showModal} close={closeModal}>
                <NavMenuWrapper>
                    <NavMenu />
                </NavMenuWrapper>
            </Modal>
        </WidthManager>
    );
};

export default Navbar;
