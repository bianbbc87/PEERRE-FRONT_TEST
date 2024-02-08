import { Container, Title, Team_Box, Gaze_Box, Rank_Box, TitleBar } from "/src/styles/style";
import CustomizedProgressBars from "/src/components/team-report/gauge/BorderLinearProgress";
import PersonalBar from "../../components/team-report/rank_table/PersonalBar";

export default function TeamReport() {
  // 예상 팀 멤버
  const teamMembers = ['김서희', '진서희', '박서희', '최서희', '신서희', '유서희'];

  return (
    <Container>
      <Title>
        팀 리포트
      </Title>
      <Team_Box>
        <p>팀 이름: PEER:Re</p>
        <p>팀원: {teamMembers.join(', ')}</p>
        <Gaze_Box>
          <div>
          <p style={{ margin: '0 20px 0 0',  whiteSpace: 'nowrap'}}>동료평가 참여율</p>
          </div>
          <CustomizedProgressBars />
        </Gaze_Box>
      </Team_Box>
      <Rank_Box>
      <TitleBar>
          <p>YES 피드백 순위</p>
          {teamMembers.map((member, index) => (
            <PersonalBar key={index} index={index} />
          ))}
        </TitleBar>
    </Rank_Box>
    </Container>
  )
}
