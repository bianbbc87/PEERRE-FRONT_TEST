import styled from "styled-components";
import SideBarButtonStyle from "/src/components/sidebar/SideBarButtonStyle";
import HelperButton from "/src/components/sidebar/HelperButton";
import { useNavigate } from "react-router-dom";
import T_L from "/src/assets/images/sidebar/team_logo.svg";
import T_S from "/src/assets/images/sidebar/team_space.svg";
import Arrow from "/src/assets/images/sidebar/arrow.svg";

export default function SideBar() {
    const navigate = useNavigate();

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
            <HoverButtonImage />
            팀 스페이스
        </ButtonHoverStyle>
        <Hr top="10px"/>
        <div onClick={() => navigate("/회고")}>
        <SideBarButtonStyle text="회고" index={0}/>
        <Hr top="10px"/>
        </div>
        <div onClick={() => navigate("/개인리포트")}>
        <SideBarButtonStyle text="개인 리포트" index={1}/>
        <Hr top="10px"/>
        </div>
        <div onClick={() => navigate("/피드백관리")}>
        <SideBarButtonStyle text="피드백 관리" index={2}/>
        <Hr top="10px"/>
        </div>
        <div onClick={() => navigate("/알림")}>
        <SideBarButtonStyle text="알림" index={3}/>
        <Hr top="10px"/>
        </div>
    </ButtonListBox>
    <Hr top="230px"/>
    <HelperListBox>
            <div onClick={() => alert("로그아웃 버튼을 클릭하였습니다. ")}>
            <HelperButton text="로그아웃" index={1}/>
            </div>
        </HelperListBox>
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
  background: url(${T_L});
  background-repeat: no-repeat;
`;

export const BarHeaderText = styled.div`
left: 0;
display: flex;
flex-direction: column;
text-align: left;
padding: 0 10px;
line-height: 1.5;
pointer-events: none;

p {
    font-size: 20px;
    font-weight: 800;
    margin: 0;
    padding: 0;
  }

  font-size: 12px;
  color: #07133B;
`;


export const ButtonListBox= styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ButtonHoverStyle = styled.button`
margin: 50px 10px 0px 10px;
padding: 15px 0;
width: 100%;
display: flex;
align-items: center;
color: #07133B;
font-size: 20px;
font-weight: 800;
`;

export const HoverButtonImage = styled.div`
  width: 35px;
  height: 35px;
  background: url(${T_S});
  background-repeat: no-repeat;
  margin-right: 20px;
  margin-left: 5px;
`;

export const HoverButtonArrowImage = styled.div`
  width: 15px;
  height: 22px;
  background: url(${Arrow});
  background-repeat: no-repeat;
`;

export const Hr = styled.hr`
  width: 95%;
  height: 1px;
  border: 0;
  background-color: #bdbdbd;
  margin-top: ${(props) => props.top || "0"};
`;

export const HelperListBox= styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  margin-top: 10px;
`;
