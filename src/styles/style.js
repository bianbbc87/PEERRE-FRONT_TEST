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
  height: 100vh;
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
  height: 100%;
`;

/* team-report */

export const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 80px;
  text-align: left;
`;

export const Title = styled.p`
text-align: left;
display: flex;
width: 100%;
font-size: 52px;
font-weight: 800;
margin: 0;
white-space: nowrap;
}
`;

export const Team_Box = styled.div`
/* 전체 너비는 그대로, 내부 여백만 추가, box-sizing */
box-sizing: border-box;
margin-top: 20px;
width: 100%;
display: flex;
flex-direction: column;
border-radius: 18px;
border: 4px solid rgba(26, 208, 121, 0.5);
text-align: left;
padding: 20px 60px 20px 40px;
gap: 20px;
background-color: #fff;

p {
  font-size: 24px;
  font-weight: 700;
  margin: 0;
}
`;

export const Gaze_Box = styled.div`
display: flex;
font-size: 20px;

p {
  margin: 0;
}
`;

/* team-report > rank */

export const Rank_Box = styled.div`
box-sizing: border-box;
margin-top: 20px;
background-color: #fff;
width: 100%;
height: 70%;
display: flex;
border-radius: 18px;
overflow: hidden;
`

export const TitleBar = styled.div`
background-color: #fff;
width: 100%;
height: 50px;

P {
  font-size: 24px;
  font-weight: 700;
  padding: 10px 55px;
  margin: 0;
}
`

export const Line = styled.hr`
  position: absolute;
  height: 100%;
  width: 1px;
  border: 0;
  background-color: #000;
  color: #000;
`;
/* personal page(개인 리포트 ) */
export const MainContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 10%;
`;

export const HeaderBox = styled.div`
  // border: 1px solid black;
  color: black;
  margin-left: 4%;
  margin-top: 3%;
  font-size: xx-large;
  font-weight: 700;
  display: flex;
  flex-direction: row;
`;

export const SelfBox = styled.div`
  color: black;
  margin-left: 4%;
  margin-top: 2%;
  font-size: xx-large;
  font-weight: 700;
  background-color: white;
  border-radius: 10px;
  height: 20%;
  margin-right: 4%;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: row;
`;

export const ReportBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  margin-left: 4%;
  margin-right: 4%;
  margin-top: 2%;
  background-color: white;
  border-radius: 10px;
  justify-content: space-evenly;
  margin-bottom: 3%;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const FeedBackType = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 80%;
`;

export const ReportName = styled.div`
  margin-top: 5%;
  margin-bottom: 5%;
  font-size: x-large;
  font-weight: 700;
  color: ${({ color }) => color};
`;

export const Evaluate = styled.div`
  margin-bottom: 10%;
`;

export const ContentLine = styled.div`
  // height: 50%;
  width: 1%;
  border-right: 1.5px solid #07133b80;
  margin-top: 5%;

  margin-bottom: 3%;
`;

export const Highlight1 = styled.span`
  color: #1ad079;
`;

export const Highlight2 = styled.span`
  color: #ff7d33;
`;

export const UpdateBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 4%;
  border-radius: 7px;
  background: #fff;
  width: 17%;
  height: 60%;
  margin-top: 1%;
`;
export const UpdateImg = styled.img`
  margin: auto 0 auto 3%;
  height: 60%;
`;

export const UpdateTime = styled.div`
  font-size: medium;
  font-weight: 548;
  margin: auto 2%;
`;

export const ProfImg = styled.img`
  background: lightgray 50% / cover no-repeat;
  border-radius: 50%;
  height: 82%;
  margin: auto 4%;
`;

export const ProfName = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.5%;
  margin-bottom: 2%;
`;

export const MyName = styled.div`
  font-size: x-large;
  font-weight: 900;
`;
export const MyRole = styled.div`
  font-size: medium;
  margin-top: 6%;
  font-weight: 550;
`;
export const IntroSelf = styled.div`
  margin: auto 0 auto 4%;
  font-size: large;
  font-weight: 900;
`;
