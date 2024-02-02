import styled from "styled-components";

// 페이지별로 용도 나눠주세요
/**  샘플 페이지 스타일 **/
export const Sample = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGray};
`;

/* 전체 */
// 기본 wrapper
export const MainWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100vw;
  display: flex;
`;

export const LeftBody = styled.div`
top: 0;
left: 0;
width: 240px;;
height: 100%;
min-height: 100vh;
background-color: yellow;
margin: 0;
`;

export const RightBody = styled.div`
flex-grow: 1; /* 남은 공간을 전부 차지한다. */
height: 100%;
min-height: 100vh;
margin: 0;
`;

export const HeaderWrapper = styled.div`
width: 100%;
height: 10vh;
background-color: orange; 
margin: 0;
`;

export const ContentWrapper = styled.div`
flex-grow: 1;
width: 100%;
height: 100%;
background-color: white;
z-index: 100;
margin: 0;
`;