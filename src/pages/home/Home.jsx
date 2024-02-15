import React from 'react';
import { HomeContainer, LogoImg, MotoImg, LoginButton, HomeBg } from '/src/styles/style';

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
                        <LogoImg />
                        <MotoImg />
                    <LoginButton onClick={handleLogin} />
                    </HomeBg>
            </HomeContainer>
    );
};

export default Home;
