// Evaluate.jsx
import styled, { css } from "styled-components";
import React from "react";

// 스타일을 정의
const StyledReportContent = styled.div`
  display: flex;
  flex-direction: row;
  height: 12%;
  width: 70%;
  border-radius: 20px;
  margin-left: 15%;
  margin-bottom: 5%;
  font-weight: 700;
  ${({ backgroundColor }) =>
    backgroundColor &&
    css`
      background-color: ${backgroundColor};
    `}
`;

const StyledReportComment = styled.div`
  width: 80%;
  text-align: left;
  margin-left: 10%;
  margin-top: 3%;
`;

const StyledCommentRate = styled.div`
  width: 20%;
  margin-top: 3%;
`;

// Evaluate 컴포넌트
function Evaluate({ comment, rate, backgroundColor }) {
  return (
    <StyledReportContent backgroundColor={backgroundColor}>
      <StyledReportComment>{comment}</StyledReportComment>
      <StyledCommentRate>{rate}</StyledCommentRate>
    </StyledReportContent>
  );
}

export default Evaluate;
