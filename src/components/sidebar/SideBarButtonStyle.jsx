import styled from "styled-components";
import PropTypes from 'prop-types';
import T_S from "/src/assets/images/sidebar/team_space.svg";
import T_R from "/src/assets/images/sidebar/team_report.svg";
import P_R from "/src/assets/images/sidebar/person_report.svg";
import Feed from "/src/assets/images/sidebar/feedback.svg";
import Selected from "/src/assets/images/sidebar/arrow.svg";
import NotSelected from "/src/assets/images/sidebar/prev_arrow.svg";

export default function SideBarButtonStyle({text, index}) {

  return (
    <ButtonWrapper>
      <SelectedButton selected={1}/>
        <ButtonImage index={index}/>
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
  color: #868686;
  font-size: 20px;
  font-weight: 800;
`;

export const ButtonImage = styled.div`
  width: 36px;
  height: 36px;
  background: url(${(props) => getUrl(props.index)});
  background-repeat: no-repeat;
  /* 3번째 이미지만 여백이 달라서 발생하는 문제 해결 css */
  margin-left: ${(props) => props.index == 0 ? "-4px" : "0px"};
  margin-right: ${(props) => props.index == 0 ? "24px" : "20px"};
`;

export const SelectedButton = styled.div`
  width: 15px;
  height: 22px;
  background: url(${(props) => isSelected(props.selected)});
  background-repeat: no-repeat;
  margin-right: 15px;
`;

// 이미지 URL을 반환하는 함수
const getUrl = (index) => {
  switch (index) {
    case 0:
      return T_R; 
    case 1:
      return P_R;
    case 2:
      return Feed;
    default:
      return T_S;
  }
};

// 선택 했는지 아닌지 판단하는 함수
const isSelected = (index) => {
  switch (index) {
    case 0:
      return Selected; 
    case 1:
      return NotSelected;
    default:
      return NotSelected;
  }
};

SideBarButtonStyle.propTypes = {
    text: PropTypes.string,
    index: PropTypes.number,
  };