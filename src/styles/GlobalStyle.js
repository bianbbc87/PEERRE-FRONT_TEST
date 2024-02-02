import { createGlobalStyle } from "styled-components";

// 필요한 전역 스타일 작성해주세요.
const GlobalStyle = createGlobalStyle`
body {
    margin: 0px;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
	align-items: center;
}

body * {
/* 추후 font family 지정 */
}
`;

export default GlobalStyle;