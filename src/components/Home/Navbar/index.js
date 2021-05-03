import React from 'react';

import TwitterLogo from 'components/TwitterLogo';

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
} from './styles';

import { HomeIcon, ExploreIcon, BellIcon, MessageIcon, SavedIcon, ListIcon, ProfileIcon, MoreOptionsIcon } from 'components/Home/NavbarIcons';

import DoTwittButton from 'components/DoTwittButton';

const Navbar = () => {
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
                                            <HomeIcon fill='white' stroke='black' stroke-width='1px' height='1.75rem' />
                                        </IconContainer>
                                        <NavLinkTextContainer>
                                            <NavLinkText>Inicio</NavLinkText>
                                        </NavLinkTextContainer>
                                    </NavLinkContentWrapper>
                                </NavLink>
                                <NavLink>
                                    <NavLinkContentWrapper>
                                        <IconContainer>
                                            <ExploreIcon fill='white' stroke='black' stroke-width='1px' height='1.75rem' />
                                        </IconContainer>
                                        <NavLinkTextContainer>
                                            <NavLinkText>Explorar</NavLinkText>
                                        </NavLinkTextContainer>
                                    </NavLinkContentWrapper>
                                </NavLink>
                                <NavLink>
                                    <NavLinkContentWrapper>
                                        <IconContainer>
                                            <BellIcon fill='white' stroke='black' stroke-width='1px' height='1.75rem' />
                                        </IconContainer>
                                        <NavLinkTextContainer>
                                            <NavLinkText>Notificaciones</NavLinkText>
                                        </NavLinkTextContainer>
                                    </NavLinkContentWrapper>
                                </NavLink>
                                <NavLink>
                                    <NavLinkContentWrapper>
                                        <IconContainer>
                                            <MessageIcon fill='white' stroke='black' stroke-width='1px' height='1.75rem' />
                                        </IconContainer>
                                        <NavLinkTextContainer>
                                            <NavLinkText>Mensajes</NavLinkText>
                                        </NavLinkTextContainer>
                                    </NavLinkContentWrapper>
                                </NavLink>
                                <NavLink>
                                    <NavLinkContentWrapper>
                                        <IconContainer>
                                            <SavedIcon height='1.75rem' />
                                        </IconContainer>
                                        <NavLinkTextContainer>
                                            <NavLinkText>Guardados</NavLinkText>
                                        </NavLinkTextContainer>
                                    </NavLinkContentWrapper>
                                </NavLink>
                            </Nav>
                        </NavContainer>
                        <DoTwittButtonContainer></DoTwittButtonContainer>
                    </NavWrapper>
                    <div>Profile</div>
                </NavProfileSeparator>
            </MainWrapper>
        </WidthManager>
    );
};

export default Navbar;
