import React from "react";
import {
  MainContainer,
  HeaderBox,
  SelfBox,
  ReportBox,
  ReportName,
  FeedBackType,
  ContentLine,
  Highlight1,
  Highlight2,
  UpdateBox,
  UpdateImg,
  UpdateTime,
  ProfImg,
  ProfName,
  MyName,
  MyRole,
  IntroSelf,
} from "/src/styles/style";
import Evaluate from "/src/components/Evaluate/Evaluate.jsx";

function PersonalReport() {
  return (
    <MainContainer>
      <HeaderBox>
        개인리포트
        <UpdateBox>
          <UpdateImg src="src/assets/images/updatetime/Time.png" />
          <UpdateTime>최종 업데이트 : 14:00</UpdateTime>
        </UpdateBox>
      </HeaderBox>
      {/* */}
      <SelfBox>
        <IntroSelf>나</IntroSelf>
        <ProfImg src="src/assets/images/profile/profile.png" />
        <ProfName>
          <MyName>김준희</MyName>
          <MyRole>피어리 마케팅 A팀</MyRole>
        </ProfName>
      </SelfBox>
      <ReportBox>
        <FeedBackType>
          <ReportName>
            <Highlight1>YES</Highlight1> 피드백
          </ReportName>
          <Evaluate
            comment="연락이 잘돼요."
            rate="6/6"
            backgroundColor="rgba(26, 208, 121, 0.92)"
          />
          <Evaluate
            comment="시간약속을 잘 지켜요."
            rate="5/6"
            backgroundColor="rgba(26, 208, 121, 0.70)"
          />
        </FeedBackType>

        <ContentLine />

        <FeedBackType>
          <ReportName>
            {" "}
            <Highlight2>NO</Highlight2> 피드백
          </ReportName>
          <Evaluate
            comment="연락이 안돼요."
            rate="6/6"
            backgroundColor="rgba(255, 125, 51, 0.92)"
          />
          <Evaluate
            comment="시간약속을 안 지켜요."
            rate="5/6"
            backgroundColor="rgba(255, 125, 51, 0.70);"
          />
        </FeedBackType>
      </ReportBox>
    </MainContainer>
  );
}

export default PersonalReport;
