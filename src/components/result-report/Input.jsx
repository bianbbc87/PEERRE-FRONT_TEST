import {
  InputContainer,
  InputProfile,
  InputImg,
  InputName,
  InputText,
  SendButton,
} from "/src/styles/style";

export default function Input() {
  return (
    <InputContainer>
      <div style={{ width: "95%", height: "100%", display: "flex", justifyContent: "space-between"}}>
        <InputProfile>
          <InputImg />
          <InputName>김준희</InputName>
        </InputProfile>
        <InputText placeholder="입력하세요" />
      </div>
      <div style={{ width: "5%", height: "100%" }}>
        <SendButton />
      </div>
    </InputContainer>
  );
}
