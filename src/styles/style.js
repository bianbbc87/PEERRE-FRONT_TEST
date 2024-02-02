import styled from "styled-components";

// 페이지별로 용도 나눠주세요
/**  샘플 페이지 스타일 **/
export const Sample = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGray};
`;

/* 전체 */
// 기본 wrapper
export const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
  min-height: 99vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

/**  유저 정보 페이지 스타일 **/
// ...

/**  일상 캘린더 스타일 **/
// ...

/** 이벤트 페이지 스타일 **/