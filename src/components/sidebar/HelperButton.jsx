import styled from "styled-components";
import PropTypes from 'prop-types';

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
  color: gray;
  margin-top: 7px;
`;

export const ButtonImage = styled.div`
  width: 23px;
  height: 23px;
  background-color: green;
  margin-right: 10px;
`;

HelperButton.propTypes = {
    text: PropTypes.string,
  };