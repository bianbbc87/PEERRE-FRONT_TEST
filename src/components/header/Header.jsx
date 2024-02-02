import styled from "styled-components";

export default function Header() {
  return (
    <Body>
        <LeftBody>
            <UserImage />
            <TitleTextBox>
                나의 팀
                <p>
                    팀 이름 | 프로젝트명
                </p>
            </TitleTextBox>
        </LeftBody>
        <RightBody>
            <SearchBox>
                <SearchImage />
                <SearchInput type="text"/>
            </SearchBox>
            <Logo />
        </RightBody>
    </Body>
  )
}

export const Body = styled.div`
position: relative;
display: flex;
align-items: center;
text-align: center;
padding: 20px 30px;
max-height: 100%;
justify-content: space-between;
`;

export const LeftBody = styled.div`
display: flex;
gap: 12px;
`;

export const RightBody = styled.div`
display: flex;
align-items: center;
`;

export const UserImage = styled.div`
width: 40px;
height: 40px;
background-color: green;
`;

export const TitleTextBox = styled.div`
margin-top: -12px;
display: flex;
flex-direction: column;
text-align: left;
line-height: 1.5;

font-size: 13px;
font-weight: 400;

p {
    font-size: 20px;
    font-weight: 700;
    margin: 0;
}
`;

export const SearchBox = styled.div`
height: 90%;
display: flex;
border-bottom: 1px solid #000;
align-items: center;
padding: 5px;
justyfi-content: space-between;
`;

export const SearchImage = styled.div`
width: 23px;
height: 23px;
background-color: green;
`;

export const SearchInput = styled.input`
width: auto;
height: 100%;
font-size: 15px;
padding: 5px 10px;
`;


export const Logo = styled.div`
width: 135px;
height: 47px;
background-color: green;
margin-left: 40px;
`;




