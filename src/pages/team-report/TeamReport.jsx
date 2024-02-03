import { Container, Title, Team_Box, Gaze_Box, Rank_Box } from "/src/styles/style";
import CustomizedProgressBars from "/src/components/team-report/gauge/BorderLinearProgress";

export default function TeamReport() {

  return (
    <Container>
      <Title>
        팀 리포트
      </Title>
      <Team_Box>
        <p>팀 이름: PEER:Re</p>
        <p>팀원: 김서희. 진서희. 박서희, 최서희, 신서희, 유서희</p>
        <Gaze_Box>
          <div>
          <p style={{ marginRight: '20px',  whiteSpace: 'nowrap'}}>동료평가 참여율</p>
          </div>
          <CustomizedProgressBars />
        </Gaze_Box>
      </Team_Box>
      <Rank_Box>
      </Rank_Box>
    </Container>
  )
}

// 왜인지 모르게 <p>동료평가 참여율</p> 여기서 p를 중복시키지 말라는 에러가 발생했음..

/**
 validateDOMNesting(...): <p> cannot appear as a descendant of <p>. 
 */

 // <p>를 <div>로 감싸서 해결