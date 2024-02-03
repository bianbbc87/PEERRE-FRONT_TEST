import styled from "styled-components";
import PropTypes from 'prop-types';
import LogOut from "/src/assets/images/sidebar/logout.svg";

export default function HelperButton({ text }) {
  return (
    <ButtonWrapper>
    <ButtonImage />
    {text}
</ButtonWrapper>
  )
}

export const ButtonWrapper = styled.button`
  max-width: 100%;
  display: flex;
  font-size: 14px;
  color: #868686;
  margin-top: 7px;
  align-items: center;
  margin-left: 10px;
`;

export const ButtonImage = styled.div`
  width: 23px;
  height: 23px;
  background: url(${LogOut});
  background-repeat: no-repeat;
  margin-right: 10px;
`;

HelperButton.propTypes = {
    text: PropTypes.string,
  };