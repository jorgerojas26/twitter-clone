import React from 'react';

import { Header, NavContainer, Nav, NavItem, NavLink, NavMenu, NavLogoContainer } from './styles';
import TwitterLogo from 'components/TwitterLogo';

import { colors } from 'styles/theme';

import { HomeIcon, ExploreIcon, BellIcon, MessageIcon, SavedIcon, ListIcon, ProfileIcon, MoreOptionsIcon } from 'components/Home/NavbarIcons';

import DoTwittButton from 'components/DoTwittButton';

const Navbar = () => {
    return (
        <Header>
            <NavContainer>
                <NavLogoContainer>
                    <TwitterLogo fill={colors.primary} width="30px" />
                </NavLogoContainer>
                <Nav>
                    <NavMenu>
                        <NavItem>
                            <NavLink>
                                <HomeIcon width="24px" fill="white" stroke="black" stroke-width="1.5px" />
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <ExploreIcon fill="white" stroke="black" stroke-width="1px" width="24px" />
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <BellIcon fill="white" stroke="black" stroke-width="1px" width="24px" />
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <MessageIcon fill="white" stroke="black" stroke-width="1px" width="24px" />
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <SavedIcon fill="black" width="24px" />
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <ListIcon fill="black" width="24px" />
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <ProfileIcon fill="black" width="24px" />
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <MoreOptionsIcon fill="black" width="24px" />
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <DoTwittButton />
                        </NavItem>
                    </NavMenu>
                </Nav>
            </NavContainer>
        </Header>
    );
};

export default Navbar;
