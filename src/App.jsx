import { Route, Routes } from "react-router-dom";
import TestPage from "/src/pages/test/TestPage.jsx";
import {
  ContentWrapper,
  HeaderWrapper,
  LeftBody,
  MainWrapper,
  RightBody,
} from "/src/styles/style.js";
import SideBar from "/src/components/sidebar/SideBar";
import Header from "/src/components/header/header";
import TeamReport from "/src/pages/team-report/TeamReport";
import ResultReport from "/src/pages/result-report/ResultReport";
import PersonalReport from "./pages/personal-report/PersonalReport";
import CreateTeam from "./pages/create-team/CreateTeam";
import CreateProject from "./pages/create-team/CreateProject";

// route 설정 해주세요.
// 경로 "/"는 추후 각자 설정해주세요.
function App() {
  return (
    <MainWrapper>
      <LeftBody>
        <SideBar />
      </LeftBody>
      <RightBody>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <ContentWrapper>
          <Routes>
            <Route path="/test" element={<TestPage />} />
            <Route path="/team-report" element={<TeamReport />} />
            <Route path="/personal-report" element={<PersonalReport />} />
            <Route path="/result-report" element={<ResultReport />} />
            <Route path="/create-team" element={<CreateTeam />} />
            <Route path="/create-project" element={<CreateProject />} />
          </Routes>
        </ContentWrapper>
      </RightBody>
    </MainWrapper>
  );
}

export default App;
