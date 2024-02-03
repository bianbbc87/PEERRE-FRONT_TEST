import styled from "styled-components";
import BG from "/src/assets/images/background/background.svg";

// 페이지별로 용도 나눠주세요
/**  샘플 페이지 스타일 **/
export const Sample = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGray};
`;

/* 전체(수정 X) */
export const MainWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100vw;
  display: flex;
`;

export const LeftBody = styled.div`
top: 0;
left: 0;
min-width: 240px;
height: 100%;
min-height: 100vh;
background-color: #fff;
box-shadow: 0px 0px 12.9px 1px rgba(0, 0, 0, 0.2);
margin: 0;
z-index: 100;
`;

export const RightBody = styled.div`
flex-grow: 1; /* 남은 공간을 전부 차지한다. */
display: flex;
flex-direction: column;
/* flex, flex-direction을 해주어야 height도 전체 차지함. */
height: 100%;
min-height: 100vh;
margin: 0;
`;

export const HeaderWrapper = styled.div`
width: 100%;
height: 10vh;
background-color: #fff; 
margin: 0;
box-shadow: 0px 0px 12.9px 1px rgba(0, 0, 0, 0.2);
z-index: 50;
`;

export const ContentWrapper = styled.div`
flex-grow: 1;
z-index: 100;
margin: 0;
background: url(${BG});
background-repeat: no-repeat;
`;

/* team-report */

export const Container = styled.div`
position: relative;
display: flex;
flex-direction: column;
align-items: center;
padding: 20px 80px;
text-align: left;
`;

export const Title = styled.p`
text-align: left;
display: flex;
width: 100%;

p {
  text-align: left;
font-size: 52px;
font-weight: 800;
margin: 0;
}
`;

export const Team_Box = styled.div`
width: 100%;
height: 30%;
display: flex;
flex-direction: column;
border-radius: 18px;
border: 4px solid rgba(26, 208, 121, 0.5);
text-align: left;
padding: 20px 30px;
gap: 20px;
background-color: #fff;

p {
  font-size: 24px;
  font-weight: 800;
  margin: 0;
}
`;

export const Gaze_Box = styled.div`
display: flex;
`;

export const Gaze = styled.div`
width: 70%;
height: 20%;
`;

export const Rank_Box = styled.div`
width: 100%;
height: 70%;
background-color: green;
`;