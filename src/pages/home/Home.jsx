import React from 'react'
import {
    HomeContainer,
    HomeBox,
    LogoImg,
    MotoImg,
    HomeLogo,
  
  } from "/src/styles/style";

function Home() {
    return (
        <HomeContainer>
            <HomeBox>
                <HomeLogo>
                    <LogoImg src="src/assets/images/background/logo.svg" />
                    <MotoImg src="src/assets/images/background/moto.svg" />
                </HomeLogo>
            </HomeBox>
        </HomeContainer>
    );
}
export default Home;