import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateTeamApi from "../../api/createproject/CreateTeamApi";

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
    try {
      const teamspaceId = await CreateTeamApi(teamName, teamIntro);
      console.log(teamspaceId);
      navigate(`/create-project`, { state: { apidata: teamspaceId } });
    } catch (error) {
      console.error(error.message);
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
