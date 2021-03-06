import React from 'react';

import { Layout, ButtonsContainer, LogoContainer, HeadingContainer, FormContainer } from './Layout';

import LabeledInput from 'components/LabeledInput';

import { colors } from 'styles/theme';

import Button from 'components/Button';

import { TwitterLogo, GitHubLogo } from 'components/Svg';

const LoginPage = () => {
    return (
        <Layout>
            <Layout.MainContent>
                <FormContainer>
                    <LabeledInput autoFocus type='text' placeholder='Teléfono, correo o usuario' />
                    <LabeledInput type='text' placeholder='Contraseña' />
                    <div style={{ margin: 'auto 0', padding: '0' }}>
                        <Button>
                            <GitHubLogo width='24px' />
                            <span>Login with GitHub</span>
                        </Button>
                    </div>
                </FormContainer>
                <LogoContainer>
                    <TwitterLogo fill={colors.primary} width='48px' />
                </LogoContainer>
                <HeadingContainer>
                    <h1>
                        Lo que está
                        <br />
                        pasando ahora
                    </h1>
                    <h3>Únete a Birdtter hoy mismo.</h3>
                </HeadingContainer>
                <ButtonsContainer>
                    <Button>
                        <GitHubLogo width='24px' />
                        <span>Login with GitHub</span>
                    </Button>
                </ButtonsContainer>
            </Layout.MainContent>

            <Layout.BackgroundImageContainer>
                <TwitterLogo fill='white' width='300px' />
            </Layout.BackgroundImageContainer>
        </Layout>
    );
};

export default LoginPage;
