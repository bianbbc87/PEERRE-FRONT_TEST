import { Container, Title, Team_Box, Gaze_Box, Gaze, Rank_Box } from "/src/styles/style";

export default function TeamReport() {
  return (
    <Container>
      <Title>
        <p>
          팀 리포트
        </p>
      </Title>
      <Team_Box>
        <p>팀 이름: PEER:Re</p>
        <p>팀원: 김서희. 진서희. 박서희, 최서희, 신서희, 유서희</p>
        <Gaze_Box>
          <p>동료평가 참여율</p>
          <Gaze />
        </Gaze_Box>
      </Team_Box>
      <Rank_Box>

      </Rank_Box>
    </Container>
  )
}
