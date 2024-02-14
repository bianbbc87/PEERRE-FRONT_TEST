import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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

  const handleResultBoxClick = async () => {
    const postData = {
      teamId: teamspaceId,
      title: projectName,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJBY2Nlc3NUb2tlbiIsImV4cCI6MTcwOTkxMTQzNCwic29jaWFsSWQiOiJ0aGRkbXMyMDA5QG5hdmVyLmNvbSJ9.Kd3e8Xm2k_SgnyWMf84p7WPd9FzNwBF7VDLSD7h55my8J--xBuYNjKM8mexLg5oPVSHr7sHchssKMRNKpVPx2A`,
      },
    };

    try {
      console.log(postData);
      const response = await axios.post(
        "http://13.124.90.245:8080/api/project",
        postData,
        config
      );
      console.log(response.data.data.projectId);

      navigate(`/team-report`);
    } catch (error) {
      console.error("팀 생성 요청 중 오류가 발생했습니다:", error);
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
