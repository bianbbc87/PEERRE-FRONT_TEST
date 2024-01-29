import { Route, Routes } from "react-router-dom";
import TestPage from "@/pages/test/TestPage.jsx";

// route 설정 해주세요.
// 경로 "/"는 추후 각자 설정해주세요.
function App() {
  return (
    <>
      <Routes>
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </>
  );
}

export default App;