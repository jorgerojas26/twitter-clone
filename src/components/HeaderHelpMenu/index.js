import {
    Wrapper,
    MainContainer,
    HeaderContainer,
    HeaderIconContainer,
    HeaderTextContainer,
    MenuItem,
    MenuItemIconContainer,
    MenuItemTextContainer,
    MenuItemSubTextContainer,
    MenuItemText,
} from './styles';

import { ColoredStarsIcon, DoubleArrowIcon, ConfigIcon } from 'components/Svg';

const HeaderHelpMenu = () => {
    return (
        <Wrapper>
            <MainContainer>
                <HeaderContainer>
                    <HeaderIconContainer>
                        <ColoredStarsIcon height='48px' />
                    </HeaderIconContainer>
                    <HeaderTextContainer>Inicio te muestra los Tweets destacados primero</HeaderTextContainer>
                </HeaderContainer>
                <MenuItem>
                    <MenuItemIconContainer>
                        <DoubleArrowIcon height='18px' />
                    </MenuItemIconContainer>
                    <MenuItemTextContainer>
                        <MenuItemTextContainer>
                            <MenuItemText>Cambiar a la vista de Tweets más recientes</MenuItemText>
                        </MenuItemTextContainer>
                        <MenuItemSubTextContainer>
                            <MenuItemText>Los Tweets aparecerán a medida que se publiquen</MenuItemText>
                        </MenuItemSubTextContainer>
                    </MenuItemTextContainer>
                </MenuItem>
                <MenuItem>
                    <MenuItemIconContainer>
                        <ConfigIcon height='18px' />
                    </MenuItemIconContainer>
                    <MenuItemTextContainer>Ver preferencias de contenido</MenuItemTextContainer>
                </MenuItem>
            </MainContainer>
        </Wrapper>
    );
};

export default HeaderHelpMenu;
