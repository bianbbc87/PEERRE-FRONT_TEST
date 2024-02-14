import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CreateProjectApi from "../../api/createproject/CreateProjectApi";
import ProjectIdStore from "/src/stores/projectId/ProjectIdStore.js";

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
  const navigate = useNavigate();
  const location = useLocation();
  const teamspaceId = location.state.apidata;
  const { addProjectId } = ProjectIdStore();

  const handleResultBoxClick = async () => {
    try {
      const projectId = await CreateProjectApi(teamspaceId, projectName);
      addProjectId(projectId);
      navigate(`/team-report`);
    } catch (error) {
      console.error(error.message);
    }
  };

  const [projectName, setProjectName] = useState("");
  return (
    <TeamContainer>
      <CreateDetail>
        <CreateTitle>프로젝트 생성</CreateTitle>
        {/*  */}
        <CreateName>
          <NameLabel>프로젝트 이름</NameLabel>
          <NameInput
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
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
        <CreateOkay onClick={handleResultBoxClick}>완료</CreateOkay>
      </CreateDetail>
      <LogoContainer>
        <CreateLogo src="src/assets/images/team-create/team-create-logo.png" />
      </LogoContainer>
    </TeamContainer>
  );
}

export default CreateProject;
