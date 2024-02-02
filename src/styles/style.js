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


@media (min-width: 576px) {
    max-width: 576px;
}

@media (min-width: 768px) {
    max-width: 768px;
}

@media (min-width: 992px) {
    max-width: 992px;
}

@media (min-width: 1200px) {
    max-width: 1200px;
}

@media (min-width: 1460px) {
    max-width: 1460px;
}
`;

/**  유저 정보 페이지 스타일 **/
// ...

/**  일상 캘린더 스타일 **/
// ...

/** 이벤트 페이지 스타일 **/