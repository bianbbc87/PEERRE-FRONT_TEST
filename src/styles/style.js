import styled from "styled-components";
import BG from "/src/assets/images/background/background.svg";
import detailBackground from "/src/assets/images/result-report/reportBox.png";
import detailBackground2 from "/src/assets/images/result-report/reportBox2.png";
import comment1 from "/src/assets/images/result-report/말풍선1.png";
// import comment2 from "/src/assets/images/result-report/말풍선2.png";
// import comment3 from "/src/assets/images/result-report/말풍선3.png";
import profileImg1 from "/src/assets/images/result-report/미모티콘1.png";
// import profileImg2 from "/src/assets/images/result-report/미모티콘2.png";
// import profileImg3 from "/src/assets/images/result-report/미모티콘3.png";
import sendButton from "/src/assets/images/result-report/전송버튼.png";

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
  background-size: cover;
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
`;

export const Team_Box = styled.div`
  /* 전체 너비는 그대로, 내부 여백만 추가, box-sizing */
  box-sizing: border-box;
  margin-top: 20px;
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  border-radius: 18px;
  border: 4px solid rgba(26, 208, 121, 0.5);
  text-align: left;
  padding: 20px 40px;
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
  font-size: 20px;
`;

/* team-report > rank */

export const Rank_Box = styled.div`
  box-sizing: border-box;
  margin-top: 20px;
  background-color: #07133b;
  width: 100%;
  height: 70%;
  display: flex;
  border-radius: 18px;
  overflow: hidden;
`;

export const TitleBar = styled.div`
  font-size: 24px;
  font-weight: 800;
  background-color: #fff;
  width: 100%;
  padding: 10px;

  P {
    font-size: 24px;
    font-weight: 800;
    margin: 0;
  }
`;

export const Line = styled.hr`
  position: absolute;
  height: 100%;
  width: 1px;
  border: 0;
  background-color: #000;
  color: #000;
`;

/* result-report */

export const ResultContainer = styled.div`
  /* border: 3px solid yellow; */
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

/* result-report > Summary */

export const DetailContainer = styled.div`
  position: absolute;
  display: flex;
  align-self: flex-end;
  margin: 0 0 4vh 0;

  @media (max-width: 1500px) {
    position: relative;
    margin-top: -120px;
  }

  @media (max-width: 1500px) and (max-height: 700px) {
    margin-top: -100px;
  }

  @media (max-width: 1500px) and (max-height: 600px) {
    margin-top: 0;
  }
`;

export const Detail = styled.div`
  min-width: 40vw;
  min-height: 5vh;
  background: url(${detailBackground});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
  display: flex;
  justify-content: end;
  flex-direction: column;
`;

export const Detail2 = styled.div`
  min-width: 40vw;
  min-height: 5vh;
  background: url(${detailBackground2});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
  display: flex;
  justify-content: end;
  flex-direction: column;
`;

export const ButtonBox = styled.div`
  width: 87vh;
  height: 2vh;
  display: flex;
  align-self: flex-end;
  justify-content: end;
`;

export const TeamButton = styled.div`
  width: 10vh;
  margin-right: 4.9vh;
  margin-top: 0.5vh;
  text-align: center;
  font-size: 1.8vh;
  font-weight: 400;
`;

export const FeedbackButton = styled.div`
  width: 10vh;
  margin-right: 1.8vh;
  margin-top: 0.5vh;
  text-align: center;
  font-size: 1.8vh;
  font-weight: 400;
`;

export const InnerBox = styled.div`
  width: 87vh;
  height: 25vh;
  display: flex;
  justify-content: space-between;
  align-self: flex-end;
`;

export const InnerBox1 = styled.div`
  width: 44%;
  height: 85%;
  display: flex;
  margin: 3vh 2vh 0 4vh;
  flex-direction: column;
`;

export const InnerBox2 = styled.div`
  width: 55%;
  height: 85%;
  margin-top: 3vh;
  margin-left: 2vh;
  flex-direction: column;
`;

export const VerticalLine = styled.div`
  width: 0.3vh;
  height: 70%;
  background-color: rgb(0, 0, 0, 0.7);
  margin: 4vh 0 0 0;
`;

export const TB = styled.div`
  display: flex;
  height: 6vh;
  align-items: center;
  margin-left: 32h;
`;

export const TT = styled.p`
  font-size: 2.5vh;
  font-weight: 600;
  margin: 0 3vh 0 2vh;
  min-width: 8vh;
`;

export const T = styled.p`
  font-size: 2.1vh;
  max-width: 24vh;
  max-height: 5vh;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export const FeedbackTitle = styled.div`
  width: 100%;
  text-align: center;
  font-size: 3vh;
  font-weight: 600;
  padding-top: 1vh;
`;

export const FeedbackText = styled.div`
  width: 100%;
  text-align: center;
  font-size: 3vh;
  font-weight: 600;
  display: flex;
  margin-top: -1vh;
  justify-content: center;
`;

export const FT = styled.div`
  max-width: 20vh;
  height: 17vh;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;

  li {
    font-size: 1.7vh;
    font-weight: 400;
    margin: 0 2vh 2vh 0;
    white-space: nowrap;
  }
`;

/* result-report > Review */

export const ContentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 0;
  width: 100%;
  height: 100%;
  justify-content: space-between;
`;

export const ReviewContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  border-radius: 18px;
  text-align: left;
  gap: 20px;
  background-color: #fff;

  p {
    font-size: 24px;
    font-weight: 800;
    margin: 0;
  }
`;

export const ReviewInnerContainer = styled.div`
  width: 72vw;
  height: 32vh;
  margin: auto;
  overflow-y: auto;
`;

export const ReviewBox = styled.div`
  width: 72vw;
  min-height: 120px;
  margin: 0 auto 20px auto;
  display: flex;
  justify-content: space-between;
`;

export const ProfileBox = styled.div`
  width: 20%;
  min-height: 6vw;
  display: flex;
  align-items: flex-end;
  margin-left: 10px;
`;

export const ProfileImage = styled.div`
  width: 8vh;
  height: 8vh;
  background: url(${profileImg1});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin: 0 0 0.5vh 3vh;
`;

export const ProfileText = styled.div`
  width: 15vh;
  margin: 0 0 0.5vh 2vh;
`;

export const ProfileName = styled.div`
  font-weight: 600;
  font-size: 3.3vh;
  margin: 0 0 0.5vh 0;
`;

export const ProfileIntroduce = styled.div`
  font-weight: 400;
  font-size: 1.6vh;
`;

export const CommentBox = styled.div`
  width: 70%;
  background: url(${comment1});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
  display: flex;
  justify-content: end;
  margin-right: 20px;
`;

export const CommentText = styled.div`
  width: 90%;
  height: 60%;
  margin: auto 1.7vw auto 0;
  font-size: 1.11vw;
  font-weight: 300;
  overflow-y: auto;
`;

/* result-report > Input */

export const InputBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 13%;
  display: flex;
  flex-direction: column;
  border-radius: 18px;
  text-align: left;
  background-color: #fff;

  p {
    font-size: 24px;
    font-weight: 800;
    margin: 0;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const InputProfile = styled.div`
  width: 15%;
  height: 80%;
  display: flex;
  margin-top: 0.5vh;
`;

export const InputImg = styled.div`
  width: 4vw;
  height: 100%;
  background: url(${profileImg1});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  display: flex;
  margin: 0.2vw 0 0 1.8vw;
`;
export const InputName = styled.div`
  border-right: 1px solid black;
  min-width: 6vw;
  height: 80%;
  font-size: 3vh;
  font-weight: 600;
  display: flex;
  align-items: center;
  margin: 0.5vw 0 0 1vw;
`;
export const InputText = styled.input`
  width: 83%;
  height: 60%;
  margin: 0.8vw 0 0 0;
  font-size: 1.2vw;
  &::placeholder {
    color: rgba(1, 1, 1, 0.3);
    font-size: 2.5vh;
  }
`;

export const SendButton = styled.div`
  width: 100%;
  height: 4vh;
  background: url(${sendButton});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  display: flex;
  margin: 0.8vw 0 0 0;
`;
