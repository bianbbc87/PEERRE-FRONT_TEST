import {
  ResultContainer,
  Title,
  ContentContainer,
  InputBox,
} from "/src/styles/style";
import Summary from "../../components/result-report/Summary";
import Review from "../../components/result-report/Review";
import Input from "../../components/result-report/Input";

export default function ResultReport() {
  return (
    <ResultContainer>
      <Title style={{ height: "45vh" }}>결과 리포트</Title>
      <Summary />
      <ContentContainer>
        <Review />
        <InputBox>
          <Input />
        </InputBox>
      </ContentContainer>
    </ResultContainer>
  );
}
