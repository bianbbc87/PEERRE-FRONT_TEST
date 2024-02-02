import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme.js";
import GlobalStyle from "@/styles/GlobalStyle.js";
import { ContentWrapper, HeaderWrapper, LeftBody, MainWrapper, RightBody } from "./styles/style.js";

// mode는 다크모드, 화이트모드 등 전역 색상 용도, 색상은 theme 파일에서 import 해주세요.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainWrapper>
          <LeftBody>

          </LeftBody>
          <RightBody>
            <HeaderWrapper>
            </HeaderWrapper>
            <ContentWrapper>
              <App />
            </ContentWrapper>
          </RightBody>
        </MainWrapper>
      </ThemeProvider>
  </BrowserRouter>
);