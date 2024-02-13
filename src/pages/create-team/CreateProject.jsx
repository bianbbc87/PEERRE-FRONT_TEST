import React from "react";
import { useLocation } from "react-router-dom";
import {
  TeamContainer,
  CreateDetail,
  CreateLogo,
  LogoContainer,
  CreateTitle,
  CreateName,
  NameLabel,
  NameInput,
  CreateTeamProject,
  ProjectLabel,
  ProjectBox,
  CreateProjectProfile,
  CreateProjectName,
  CreateOkay,
} from "/src/styles/style";

function CreateProject() {
  const location = useLocation();
  const teamspaceId = location.state?.teamspaceId;
  return (
    <TeamContainer>
      <CreateDetail>
        <CreateTitle>프로젝트 생성</CreateTitle>
        {/*  */}
        <CreateName>
          <NameLabel>프로젝트 이름</NameLabel>
          <NameInput
            type="text"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
          />
        </CreateName>
        {/*  */}
        <CreateTeamProject>
          <ProjectLabel>팀장</ProjectLabel>
          <ProjectBox>
            <CreateProjectProfile src="src/assets/images/team-create/leaderprof.png" />
            <CreateProjectName>BBB</CreateProjectName>
          </ProjectBox>
        </CreateTeamProject>
        {/*  */}
        <CreateOkay>완료</CreateOkay>
      </CreateDetail>
      <LogoContainer>
        <CreateLogo src="src/assets/images/team-create/team-create-logo.png" />
      </LogoContainer>
    </TeamContainer>
  );
}

export default CreateProject;
