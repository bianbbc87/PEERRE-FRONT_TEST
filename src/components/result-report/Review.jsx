import {
  ReviewContainer,
  ReviewInnerContainer,
  ReviewBox,
  ProfileBox,
  CommentBox,
  CommentText,
  ProfileImage,
  ProfileText,
  ProfileName,
  ProfileIntroduce
} from "/src/styles/style";


export default function Review() {
  const exampleText = `내일부터 설 연휴가 시작되면서 벌써부터 귀성길, 귀경길 교통 체증
    걱정하시는 분들 많으실 텐데요. 올해는 지난해보다 도로 교통량이
    늘어나 고향 오가는 시간이 조금 더 걸릴 것으로 보입니다.이번 설
    연휴는 대체공휴일을 더해도 나흘로 지난 추석보다 좀 짧은 편인데요
    내일부터 설 연휴가 시작되면서 벌써부터 귀성길, 귀경길 교통 체증
    걱정하시는 분들 많으실 텐데요. 올해는 지난해보다 도로 교통량이
    늘어나 고향 오가는 시간이 조금 더 걸릴 것으로 보입니다.이번 설
    연휴는 대체공휴일을 더해도 나흘로 지난 추석보다 좀 짧은 편인데요`;


  return (
    <ReviewContainer>
      <ReviewInnerContainer>
        <ReviewBox>
          <ProfileBox>
            <ProfileImage></ProfileImage>
            <ProfileText>
                <ProfileName>김준희</ProfileName>
                <ProfileIntroduce>피어리 마케팅 A팀</ProfileIntroduce>
            </ProfileText>
          </ProfileBox>
          <CommentBox>
            <CommentText>{exampleText}</CommentText>
          </CommentBox>
        </ReviewBox>
        <ReviewBox>
          <ProfileBox>
            <ProfileImage></ProfileImage>
            <ProfileText>
                <ProfileName>박서희</ProfileName>
                <ProfileIntroduce>피어리 마케팅 B팀</ProfileIntroduce>
            </ProfileText>
          </ProfileBox>
          <CommentBox>
            <CommentText>{exampleText}</CommentText>
          </CommentBox>
        </ReviewBox>
        <ReviewBox>
          <ProfileBox>
            <ProfileImage></ProfileImage>
            <ProfileText>
                <ProfileName>신주휘</ProfileName>
                <ProfileIntroduce>피어리 마케팅 C팀</ProfileIntroduce>
            </ProfileText>
          </ProfileBox>
          <CommentBox>
            <CommentText>{exampleText}</CommentText>
          </CommentBox>
        </ReviewBox>
        <ReviewBox>
          <ProfileBox>
            <ProfileImage></ProfileImage>
            <ProfileText>
                <ProfileName>고길동</ProfileName>
                <ProfileIntroduce>피어리 마케팅 D팀</ProfileIntroduce>
            </ProfileText>
          </ProfileBox>
          <CommentBox>
            <CommentText>{exampleText}</CommentText>
          </CommentBox>
        </ReviewBox>
      </ReviewInnerContainer>
    </ReviewContainer>
  );
}
