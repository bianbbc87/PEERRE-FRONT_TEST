import { Route, Routes } from "react-router-dom";
import TestPage from "/src/pages/test/TestPage.jsx";
import { ContentWrapper, HeaderWrapper, LeftBody, MainWrapper, RightBody } from "/src/styles/style.js";
import SideBar from "./components/sidebar/SideBar";

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
      </HeaderWrapper>
      <ContentWrapper>
      <Routes>
        <Route path="/test" element={<TestPage />} />
      </Routes>
      </ContentWrapper>
    </RightBody>
  </MainWrapper>
  );
}

export default App;