import { Container, Title, Team_Box, Gaze_Box, Rank_Box, TitleBar, Rank_Box_Color, Line } from "/src/styles/style";
import CustomizedProgressBars from "/src/components/team-report/gauge/BorderLinearProgress";
import PersonalBar from "../../components/team-report/rank_table/PersonalBar";
import { useState, useEffect } from "react";
import axios from 'axios';

export default function TeamReport() {
  // 더미 데이터
  // 이름, 개수
  const teamMembers = [
    {"name": "김서희", "value": 75},
    {"name": "진서희", "value": 72},
    {"name": "박서희", "value": 70},
    {"name": "최서희", "value": 68},
    {"name": "신서희", "value": 63},
    {"name": "유서희", "value": 55}
  ]

  const [data, setData] = useState();
  const [projectid, setProjectId] = useState(10);

  useEffect(() => {
    const getData = async () => {
      try {
        // 여기서 'your-api-url'을 실제 API URL로 대체합니다.
        const response = await axios.get('http://13.124.90.245:8080/api/projects/1/team-report', projectid, {
          headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsImV4cCI6MTcwOTkxMTQzNCwic29jaWFsSWQiOiJ0aGRkbXMyMDA5QG5hdmVyLmNvbSJ9.Kd3e8Xm2k_SgnyWMf84p7WPd9FzNwBF7VDLSD7h55my8J--xBuYNjKM8mexLg5oPVSHr7sHchssKMRNKpVPx2A',
            'Content-Type': 'application/json'
          }
        });
        setData(response.data); 
        console.log(response.data);
      } catch(error) {
        console.log(error);
      }
    }

    getData();
  }, []);

  const [selected, setSelected] = useState(99);

  const selectBar = (index) => () => {
    setSelected(index);
  }

  return (
    <Container>
      <Title>
        팀 리포트
      </Title>
      <Team_Box>
        <p>팀 이름: PEER:Re</p>
        <p>팀원: {teamMembers.map(member => member.name).join(', ')}</p>
        <Gaze_Box>
          <div>
          <p style={{ margin: '0 20px 0 0',  whiteSpace: 'nowrap'}}>동료평가 참여율</p>
          </div>
          <CustomizedProgressBars value={50}/>
        </Gaze_Box>
      </Team_Box>
      <Rank_Box>
        <Rank_Box_Color />
        <Line />
      <TitleBar>
          <p>YES 피드백 순위</p>
      </TitleBar>
          {teamMembers.map((member, index) => (
            <PersonalBar key={index} index={index} value={member.value} selected={selected} onClick={selectBar(index)}/>
          ))}
    </Rank_Box>
    </Container>
  )
}
