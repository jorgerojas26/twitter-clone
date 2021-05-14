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
    NavMenuModalWrapper,
    ProfileMenuModalWrapper,
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
    const [showNavMenuModal, setShowNavMenuModal] = useState(false);
    const [showProfileMenuModal, setShowProfileMenuModal] = useState(false);
    const [activeItem, setActiveItem] = useState('Home');

    const handleClick = (event, elementId) => {
        setActiveItem(elementId);

        if (elementId === 'MoreOptions') {
            setShowNavMenuModal(true);
        } else if (elementId === 'ProfileMenu') {
            setShowProfileMenuModal(true);
        }
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
                                    <NavLinkContentWrapper
                                        onClick={(event) => handleClick(event, 'Home')}
                                        className={activeItem === 'Home' ? 'active' : ''}
                                    >
                                        <IconContainer>
                                            <HomeIcon height='24px' active={activeItem === 'Home'} />
                                        </IconContainer>
                                        <NavLinkTextContainer>
                                            <NavLinkText>Inicio</NavLinkText>
                                        </NavLinkTextContainer>
                                    </NavLinkContentWrapper>
                                </NavLink>
                                <NavLink>
                                    <NavLinkContentWrapper
                                        onClick={(event) => handleClick(event, 'Explore')}
                                        className={activeItem == 'Explore' ? 'active' : ''}
                                    >
                                        <IconContainer iconVariant>
                                            <ExploreIcon height='24px' active={activeItem == 'Explore'} />
                                            <HashtagIcon height='24px' active={activeItem == 'Explore'} />
                                        </IconContainer>
                                        <NavLinkTextContainer>
                                            <NavLinkText>Explorar</NavLinkText>
                                        </NavLinkTextContainer>
                                    </NavLinkContentWrapper>
                                </NavLink>
                                <NavLink>
                                    <NavLinkContentWrapper
                                        onClick={(event) => handleClick(event, 'Notifications')}
                                        className={activeItem == 'Notifications' ? 'active' : ''}
                                    >
                                        <IconContainer>
                                            <BellIcon height='24px' active={activeItem === 'Notifications'} />
                                        </IconContainer>
                                        <NavLinkTextContainer>
                                            <NavLinkText>Notificaciones</NavLinkText>
                                        </NavLinkTextContainer>
                                    </NavLinkContentWrapper>
                                </NavLink>
                                <NavLink>
                                    <NavLinkContentWrapper
                                        onClick={(event) => handleClick(event, 'Messages')}
                                        className={activeItem == 'Messages' ? 'active' : ''}
                                    >
                                        <IconContainer>
                                            <MessageIcon height='24px' active={activeItem === 'Messages'} />
                                        </IconContainer>
                                        <NavLinkTextContainer>
                                            <NavLinkText>Mensajes</NavLinkText>
                                        </NavLinkTextContainer>
                                    </NavLinkContentWrapper>
                                </NavLink>
                                <NavLink dissapearOnMobile>
                                    <NavLinkContentWrapper
                                        onClick={(event) => handleClick(event, 'Saved')}
                                        className={activeItem == 'Saved' ? 'active' : ''}
                                    >
                                        <IconContainer>
                                            <SavedIcon height='24px' active={activeItem == 'Saved'} />
                                        </IconContainer>
                                        <NavLinkTextContainer>
                                            <NavLinkText>Guardados</NavLinkText>
                                        </NavLinkTextContainer>
                                    </NavLinkContentWrapper>
                                </NavLink>
                                <NavLink dissapearOnMobile>
                                    <NavLinkContentWrapper
                                        onClick={(event) => handleClick(event, 'Lists')}
                                        className={activeItem == 'Lists' ? 'active' : ''}
                                    >
                                        <IconContainer>
                                            <ListIcon height='24px' active={activeItem == 'Lists'} />
                                        </IconContainer>
                                        <NavLinkTextContainer>
                                            <NavLinkText>Listas</NavLinkText>
                                        </NavLinkTextContainer>
                                    </NavLinkContentWrapper>
                                </NavLink>
                                <NavLink dissapearOnMobile>
                                    <NavLinkContentWrapper
                                        onClick={(event) => handleClick(event, 'Profile')}
                                        className={activeItem == 'Profile' ? 'active' : ''}
                                    >
                                        <IconContainer>
                                            <ProfileIcon height='24px' active={activeItem == 'Profile'} />
                                        </IconContainer>
                                        <NavLinkTextContainer>
                                            <NavLinkText>Perfil</NavLinkText>
                                        </NavLinkTextContainer>
                                    </NavLinkContentWrapper>
                                </NavLink>
                                <NavLink dissapearOnMobile>
                                    <NavLinkContentWrapper onClick={(event) => handleClick(event, 'MoreOptions')}>
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
                        <ProfileMenuContainer onClick={(event) => handleClick(event, 'ProfileMenu')}>
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
            <Modal show={showNavMenuModal} close={() => setShowNavMenuModal(false)}>
                <NavMenuModalWrapper>
                    <NavMenu />
                </NavMenuModalWrapper>
            </Modal>
            <Modal show={showProfileMenuModal} close={() => setShowProfileMenuModal(false)}>
                <ProfileMenuModalWrapper>Profile Menu Modal</ProfileMenuModalWrapper>
            </Modal>
        </WidthManager>
    );
};

export default Navbar;
