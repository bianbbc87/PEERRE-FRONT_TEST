import styled from "styled-components";

export default function SideBarButtonStyle({ text }) {
  return (
    <ButtonWrapper>
        <ButtonImage />
        {text}
        <EmptyImage />
    </ButtonWrapper>
  )
}

export const ButtonWrapper = styled.button`
  margin: 0 10px;
  padding: 15px 0;
  max-width: 100%;
  display: flex;
  align-items: center;
  color: gray;
  justify-content: space-between;
  font-size: 20px;
  font-weight: 400;
  border-bottom: 1px solid #bdbdbd;
`;

export const ButtonImage = styled.div`
  width: 35px;
  height: 35px;
  background-color: green;
`;

export const EmptyImage = styled.div`
  width: 35px;
  height: 35px;
`;