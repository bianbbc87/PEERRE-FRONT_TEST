import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

// 게이지 샘플
const BorderLinearProgress = styled(LinearProgress)(() => ({
  // css 적용
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: '#07133B',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#1AD079',
  },
}));

export default function CustomizedProgressBars({value}) {
  return (
    // materuial와 styled 중복 import가 안되어서 style={{}} 사용함.
    <div style={{ 
      display: 'flex', 
      width: '100%', 
      alignItems: 'center', 
      gap: '20px', 
      fontSize: '20px'
      }}>
    <Box sx={{ flexGrow: 1 }}>
      <BorderLinearProgress variant="determinate" value={value} />
    </Box>
          <Typography variant="body2" color="#000000">{`${Math.round(
            value,
          )}%`}</Typography>
          </div>
  );
}

// Typography fontsize가 안 변한당~~

CustomizedProgressBars.propTypes = {
  value: PropTypes.number,
};