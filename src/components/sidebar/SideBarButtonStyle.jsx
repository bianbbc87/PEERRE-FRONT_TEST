import styled from "styled-components";
import PropTypes from 'prop-types';

export default function SideBarButtonStyle({ text}) {

  return (
    <ButtonWrapper>
        <ButtonImage/>
        {text}
    </ButtonWrapper>
  )
}

export const ButtonWrapper = styled.button`
  margin: 0 10px;
  padding: 15px 0;
  width: 100%;
  display: flex;
  align-items: center;
  color: #bdbdbd;
  font-size: 20px;
  font-weight: 400;

  gap: 12px;
`;

export const ButtonImage = styled.div`
  width: 35px;
  height: 35px;
  background-color: green;
`;

SideBarButtonStyle.propTypes = {
    text: PropTypes.string,
    path: PropTypes.string,
  };