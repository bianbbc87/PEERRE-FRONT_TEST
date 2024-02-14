import React from 'react';
import { HomeContainer, HomeBox, LogoImg, MotoImg, HomeLogo } from '/src/styles/style';

const Home = () => {
    const Rest_api_key = process.env.REACT_APP_KAKAO_REST_API_KEY; 
    const redirect_uri = 'http://localhost:8080/oauth2/authorization/kakao';
    // oauth 요청 URL
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
    const handleLogin = () => {
        window.location.href = kakaoURL;
    };

    return (
        <>
            <HomeContainer>
                <HomeBox>
                    <HomeLogo>
                        <LogoImg src="src/assets/images/background/logo.svg" />
                        <MotoImg src="src/assets/images/background/moto.svg" />
                    </HomeLogo>
                </HomeBox>
            </HomeContainer>
            <button onClick={handleLogin}>카카오 로그인</button>
        </>
    );
};

export default Home;
