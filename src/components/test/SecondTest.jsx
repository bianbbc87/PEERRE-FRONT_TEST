import useStore from "@/stores/test/store.js";

function SecondTest() {
    // useStore로 store 값 가져오기
  const selectedButton = useStore((state) => state.selectedButton);
  const count = useStore((state) => state.count);

  // 이렇게도 한 줄로도 작성 할 수 있다.
  // const { count, selectedButton } = useStore((state) => state);

  return (
    <div>
      <b>secondChild</b>
      <p>카운트: {count}</p>
      <p>선택한 버튼: {selectedButton}</p>
    </div>
  );
}

export default SecondTest;