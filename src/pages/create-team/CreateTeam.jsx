import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  TeamContainer,
  CreateDetail,
  CreateLogo,
  LogoContainer,
  CreateTitle,
  CreateName,
  NameLabel,
  NameInput,
  CreateIntro,
  IntroLabel,
  IntroInput,
  CreateLeader,
  LeaderLabel,
  LeaderBox,
  CreateLeaderProfile,
  CreateLeaderName,
  CreateOkay,
} from "/src/styles/style";

function CreateTeam() {
  const navigate = useNavigate();

  const handleNextBoxClick = async () => {
    const postData = {
      name: teamName,
      profile: teamIntro,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsImV4cCI6MTcwOTkxMTQzNCwic29jaWFsSWQiOiJ0aGRkbXMyMDA5QG5hdmVyLmNvbSJ9.Kd3e8Xm2k_SgnyWMf84p7WPd9FzNwBF7VDLSD7h55my8J--xBuYNjKM8mexLg5oPVSHr7sHchssKMRNKpVPx2A`,
      },
    };

    try {
      // console.log(config);
      // console.log(postData);
      const response = await axios.post(
        "http://13.124.90.245:8080/api/teamspace",
        postData,
        config
      );
      const teamspaceId = response.data.data.teamspaceId;
      // console.log(teamspaceId);
      navigate(`/create-project`, { state: { apidata: teamspaceId } });
    } catch (error) {
      console.error("팀 생성 요청 중 오류가 발생했습니다:", error);
    }
  };

  const [teamName, setTeamName] = useState("");
  const [teamIntro, setTeamIntro] = useState("");

  return (
    <TeamContainer>
      <CreateDetail>
        <CreateTitle>팀 스페이스 생성</CreateTitle>
        {/*  */}
        <CreateName>
          <NameLabel>팀 이름</NameLabel>
          <NameInput
            type="text"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
          />
        </CreateName>
        {/*  */}
        <CreateIntro>
          <IntroLabel>팀 소개</IntroLabel>
          <IntroInput
            type="text"
            value={teamIntro}
            onChange={(e) => setTeamIntro(e.target.value)}
          />
        </CreateIntro>
        {/*  */}
        <CreateLeader>
          <LeaderLabel>팀장</LeaderLabel>
          <LeaderBox>
            <CreateLeaderProfile src="src/assets/images/team-create/leaderprof.png" />
            <CreateLeaderName>BBB</CreateLeaderName>
          </LeaderBox>
        </CreateLeader>
        {/*  */}
        <CreateOkay onClick={handleNextBoxClick}>완료</CreateOkay>
      </CreateDetail>
      <LogoContainer>
        <CreateLogo src="src/assets/images/team-create/team-create-logo.png" />
      </LogoContainer>
    </TeamContainer>
  );
}

export default CreateTeam;
