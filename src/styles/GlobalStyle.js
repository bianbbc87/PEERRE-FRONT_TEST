import { createGlobalStyle } from "styled-components";

// 필요한 전역 스타일 작성해주세요.
const GlobalStyle = createGlobalStyle`
body {
    margin: 0px;
}

body * {
/* 추후 font family 지정 */
}

button {
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    }

    input {
        background-color: transparent;
        outline: none;
        border: none;
        }
`;

export default GlobalStyle;