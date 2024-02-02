import { Sample } from "/src/styles/style";
import FirstTest from "/src/components/test/FirstTest";
import SecondTest from "/src/components/test/SecondTest";

export default function TestPage() {
  return (
    <div>
      <h1>테스트용 페이지입니다.</h1>
      1. 파일 경로는 <b>절대경로</b>입니다. {"/src"}로 시작해주세요. 
      <br />
      2. GlobalStyle.jsx에 <b>전역 스타일</b> 정의해주세요. <br />
      <Sample> ex{")"} theme.colors.darkGray</Sample>
      3. 색상은 Theme.js에 정의해주세요. <br />
      4. 스타일드 컴포넌트는 모두 통일 <Sample>경로 : `@/styles/styles`</Sample>
      <br />
      <h3>다운로드 패키지</h3>
      공용 : react-router-dom, axios, styled-components, zustand
      <br />
      <b>이외 필요한 라이브러리들 설치해주세요.</b>
      <br />
      <br />
      라우터 세팅 완료, baseURL 세팅 완료, eslint 세팅 완료
      <br />
      <h3>공용 스타일</h3>
      5. 기본 폰트 Noto Sans KR, 폰트 사이즈 16px(추후 수정해도 됨)
      <br />
      <b>
        이외 필요한 디자인들 커스텀 해주세요.
      </b>
      <h3>Zustand Test</h3>
      store에 저장된 button(String)과 count(Integer) 값을 전역으로 관리합니다. <br /><br />
      <FirstTest />
      <SecondTest />
      </div>
  );
}