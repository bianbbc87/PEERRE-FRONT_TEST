import React from "react";
import {
  TeamContainer,
  CreateDetail,
  CreateLogo,
  LogoContainer,
  CreateTitle,
  CreateName,
  NameLabel,
  NameBox,
  CreateTeamProject,
  ProjectLabel,
  ProjectBox,
  CreateProjectProfile,
  CreateProjectName,
  CreateOkay,
} from "/src/styles/style";

function CreateProject() {
  return (
    <TeamContainer>
      <CreateDetail>
        <CreateTitle>프로젝트 생성</CreateTitle>
        {/*  */}
        <CreateName>
          <NameLabel>프로젝트 이름</NameLabel>
          <NameBox></NameBox>
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
