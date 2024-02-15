import React from 'react';
import { HomeContainer, LogoImg, MotoImg, LoginButton, HomeBg } from '/src/styles/style';
import { HomeBox } from '../../styles/style';

const Home = () => {

    // kakao login 요청
    const handleLogin = () => {
        window.location.href = `${
            import.meta.env.VITE_APP_SERVER_HOST
          }/oauth2/authorization/kakao`;
    };

    return (
            <HomeContainer>
                <HomeBg>
                    <HomeBox>
                        <LogoImg />
                        <MotoImg />
                    <LoginButton onClick={handleLogin} />
                    </HomeBox>
                    </HomeBg>
            </HomeContainer>
    );
};

export default Home;
