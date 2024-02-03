import { Container, Title, Team_Box, Gaze_Box, Gaze, Rank_Box } from "/src/styles/style";
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function TeamReport() {
  const progress = 80; // 진행 정도(%)

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
          <Gaze>
          </Gaze>
        </Gaze_Box>
      </Team_Box>
      <Rank_Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ width: '100%', mr: 1 }}>
            <LinearProgress variant="determinate" value={progress} />
          </Box>
          <Box sx={{ minWidth: 35 }}>
            <Typography variant="body2" color="#000000">{`${Math.round(
              progress,
            )}%`}</Typography>
          </Box>
        </Box>
      </Rank_Box>
    </Container>
  )
}
