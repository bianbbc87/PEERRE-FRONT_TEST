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
            backgroundcolor="rgba(26, 208, 121, 0.92)"
          />
          <Evaluate
            comment="시간약속을 잘 지켜요."
            rate="5/6"
            backgroundcolor="rgba(26, 208, 121, 0.70)"
          />
          <Evaluate
            comment="능력이 뛰어나요."
            rate="4/6"
            backgroundcolor="rgba(26, 208, 121, 0.40)"
          />
          <Evaluate
            comment="말을 조리있게 잘해요."
            rate="3/6"
            backgroundcolor="rgba(26, 208, 121, 0.15)"
          />
          <Evaluate
            comment="빈틈이 없어요."
            rate="0/6"
            backgroundcolor="rgba(217, 217, 217, 0.30)"
          />
          <Evaluate
            comment="재미있어요."
            rate="0/6"
            backgroundcolor="rgba(217, 217, 217, 0.30)"
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
            backgroundcolor="rgba(255, 125, 51, 0.92)"
          />
          <Evaluate
            comment="시간약속을 안 지켜요."
            rate="5/6"
            backgroundcolor="rgba(255, 125, 51, 0.70);"
          />
          <Evaluate
            comment="능력이 뒤떨어져요."
            rate="4/6"
            backgroundcolor="rgba(255, 125, 51, 0.40)"
          />
          <Evaluate
            comment="말을 조리있게 못해요."
            rate="3/6"
            backgroundcolor="rgba(255, 125, 51, 0.15)"
          />
          <Evaluate
            comment="빈틈이 있어요."
            rate="0/6"
            backgroundcolor="rgba(217, 217, 217, 0.30)"
          />
          <Evaluate
            comment="재미없어요."
            rate="0/6"
            backgroundcolor="rgba(217, 217, 217, 0.30)"
          />
        </FeedBackType>
      </ReportBox>
    </MainContainer>
  );
}

export default PersonalReport;
