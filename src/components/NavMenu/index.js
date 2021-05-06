import { MenuContainer, MenuItemContainer, MenuLink, MenuLinkContentWrapper, IconContainer, LinkTextContainer, LinkText, Separator } from './styles';

import {
    ThemesIcon,
    LightingIcon,
    NewsletterIcon,
    AdsIcon,
    AnalyticsIcon,
    ConfigIcon,
    HelpIcon,
    ShowIcon,
    ShowIconComplement,
    AccesibilityIcon,
} from 'components/Svg';

const NavMenu = ({ children }) => {
    return (
        <MenuContainer>
            <MenuItemContainer>
                <MenuLink>
                    <MenuLinkContentWrapper>
                        <IconContainer>
                            <ThemesIcon height='1.25em' />
                        </IconContainer>
                        <LinkTextContainer>
                            <LinkText>Temas</LinkText>
                        </LinkTextContainer>
                    </MenuLinkContentWrapper>
                </MenuLink>
                <MenuLink>
                    <MenuLinkContentWrapper>
                        <IconContainer>
                            <LightingIcon height='1.25em' />
                        </IconContainer>
                        <LinkTextContainer>
                            <LinkText>Momentos</LinkText>
                        </LinkTextContainer>
                    </MenuLinkContentWrapper>
                </MenuLink>
                <MenuLink>
                    <MenuLinkContentWrapper>
                        <IconContainer>
                            <NewsletterIcon height='1.25em' />
                        </IconContainer>
                        <LinkTextContainer>
                            <LinkText>Boletines informativos</LinkText>
                        </LinkTextContainer>
                    </MenuLinkContentWrapper>
                </MenuLink>
                <MenuLink>
                    <MenuLinkContentWrapper>
                        <IconContainer>
                            <AdsIcon height='1.25em' />
                        </IconContainer>
                        <LinkTextContainer>
                            <LinkText>Twitter Ads</LinkText>
                        </LinkTextContainer>
                    </MenuLinkContentWrapper>
                </MenuLink>
                <MenuLink>
                    <MenuLinkContentWrapper>
                        <IconContainer>
                            <AnalyticsIcon height='1.25em' />
                        </IconContainer>
                        <LinkTextContainer>
                            <LinkText>Analytics</LinkText>
                        </LinkTextContainer>
                    </MenuLinkContentWrapper>
                </MenuLink>
                <Separator />
                <MenuLink>
                    <MenuLinkContentWrapper>
                        <IconContainer>
                            <ConfigIcon height='1.25em' />
                        </IconContainer>
                        <LinkTextContainer>
                            <LinkText>Configuración y privacidad</LinkText>
                        </LinkTextContainer>
                    </MenuLinkContentWrapper>
                </MenuLink>
                <MenuLink>
                    <MenuLinkContentWrapper>
                        <IconContainer>
                            <HelpIcon height='1.25em' />
                        </IconContainer>
                        <LinkTextContainer>
                            <LinkText>Centro de ayuda</LinkText>
                        </LinkTextContainer>
                    </MenuLinkContentWrapper>
                </MenuLink>
                <MenuLink>
                    <MenuLinkContentWrapper>
                        <IconContainer>
                            <ShowIcon height='1.25em' />
                            <ShowIconComplement height='1.25em' />
                        </IconContainer>
                        <LinkTextContainer>
                            <LinkText>Mostrar</LinkText>
                        </LinkTextContainer>
                    </MenuLinkContentWrapper>
                </MenuLink>
                <MenuLink>
                    <MenuLinkContentWrapper>
                        <IconContainer>
                            <AccesibilityIcon height='1.25em' />
                        </IconContainer>
                        <LinkTextContainer>
                            <LinkText>Atajos de teclado</LinkText>
                        </LinkTextContainer>
                    </MenuLinkContentWrapper>
                </MenuLink>
            </MenuItemContainer>
        </MenuContainer>
    );
};

export default NavMenu;
