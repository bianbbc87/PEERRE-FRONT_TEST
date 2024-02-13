import React from "react";
import {
  MainFeedback,
  FeedbackUsersTextBox,
  FeedBackNameBox,
  FeedbackBox,
  FeedbackAnswer,
  UsersFeedBackType,
  Highlight1,
  Highlight2,
  UserTeamProfImg,
  TeamName,
  Name,
  Role,
  Assess1,
  Assess2,
  FeedbackLine,
  Button,
  Block,
} from "/src/styles/style";

function FeedbackUsers() {
  return (
    <MainFeedback>
      <FeedbackUsersTextBox>
        피드백관리
      </FeedbackUsersTextBox>
      <FeedBackNameBox>
        <UserTeamProfImg src="/src/assets/images/profile/image 35.png"/>
        <TeamName>
          <Name>김준희</Name>
          <Role>피어리 마케팅 A팀</Role>
        </TeamName>
      </FeedBackNameBox>
      <FeedbackBox>
        <UsersFeedBackType>
          <FeedbackAnswer>
            <Highlight1>YES</Highlight1> 피드백
          </FeedbackAnswer>
            <Assess1>연락이 잘돼요.</Assess1>
         
            <Assess1>시간약속을 잘지켜요.</Assess1>
         
          
            <Assess1>능력이 뛰어나요.</Assess1>
         
            <Assess1>말을 조리있게 잘해요.</Assess1>
       
          
            <Assess1>빈틈이 없어요.</Assess1>
         
          <Button>완료</Button>
        </UsersFeedBackType>
      
        <FeedbackLine />
        
        <UsersFeedBackType>
          <FeedbackAnswer>
            <Highlight2>NO</Highlight2> 피드백
          </FeedbackAnswer>
       
            <Assess2>연락이 안 돼요.</Assess2>
       
         
            <Assess2>시간약속을 안 지켜요.</Assess2>
    
            <Assess2>능력이 뒤떨어져요.</Assess2>
      
       
            <Assess2>말을 조리있게 못해요.</Assess2>
    
            <Assess2>빈틈이 있어요.</Assess2>
      
          <Block/>
        </UsersFeedBackType>
      </FeedbackBox>
    </MainFeedback>
  );
}

export default FeedbackUsers;