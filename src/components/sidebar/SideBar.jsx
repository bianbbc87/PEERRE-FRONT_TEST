import styled from "styled-components";
import SideBarButtonStyle from "/src/components/sidebar/SideBarButtonStyle";
import HelperButton from "/src/components/sidebar/HelperButton";

export default function SideBar() {
  return (
    <Body>
   <BarHeader>
    <BarHeaderImage />
    <BarHeaderText>
        <p>
            김준희
        </p>
        피어리 마케팅 A팀
    </BarHeaderText>
    </BarHeader>
    <Hr top="15px"/>
    <ButtonListBox>
        <ButtonHoverStyle>
            <ButtonImage />
            팀 리포트
            <ButtonImage />
        </ButtonHoverStyle>
        <Hr top="10px"/>
        <SideBarButtonStyle text="회고"/>
        <SideBarButtonStyle text="회고"/>
        <SideBarButtonStyle text="회고"/>
        <SideBarButtonStyle text="알림"/>
    </ButtonListBox>
    <Hr top="150px"/>
    <HelperListBox>
            <HelperButton text="도움말" />
            <HelperButton text="로그아웃" />
        </HelperListBox>
        <CreateTeamButton>
            <CreateTeamImage/>
            팀 스페이스 생성
        </CreateTeamButton>
       </Body>
  )
}

export const Body = styled.div`
position: relative;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
padding: 20px;
`;

export const BarHeader = styled.div`
  display: flex;
  width: 90%;
  margin-top: 24px;
`;

export const BarHeaderImage = styled.div`
  width: 50px;
  height: 50px;
  background-color: green;
`;

export const BarHeaderText = styled.div`
left: 0;
display: flex;
flex-direction: column;
text-align: left;
padding: 0 10px;
line-height: 1.5;

p {
    font-size: 20px;
    font-weight: 800;
    margin: 0;
    padding: 0;
  }

  font-size: 12px;
  color: gray;
`;


export const ButtonListBox= styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ButtonHoverStyle = styled.div`
margin-top: 35px;
  max-width: 100%;
  display: flex;
  align-items: center;
  color: gray;
  border-radius: 8px;
  background-color: rgba(29, 66, 188, 0.1); /* #1D42BC */
  padding: 10px 15px;
  justify-content: space-between;

  font-size: 20px;
  font-weight: 400;
`;

export const ButtonImage = styled.div`
  width: 35px;
  height: 35px;
  background-color: green;
`;

export const Hr = styled.hr`
  width: 90%;
  color: #d9d9d9;
  margin-top: ${(props) => props.top || "0"};
`;

export const HelperListBox= styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  margin-top: 15px;
`;

export const CreateTeamImage = styled.div`
  min-width: 40px;
  min-height: 40px;
  margin-right: 15px;
  background-color: green;
`;

export const CreateTeamButton = styled.div`
max-width: 100%;
padding: 20px;
text-align: left;
display: flex;
font-size: 18px;
font-weight: 400;
color: black;
box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.5);
border-radius: 8px;

margin-top: 50px;
`;



