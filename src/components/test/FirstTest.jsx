import useStore from "/src/stores/test/store.js";

function FirstTest() {
    // store 파일의 actions 가져오기
  const { setSelectedButton, incrementCount, removeCount } = useStore((state) => state);

// click 시 button 액션 사용
  const handleClick = (button) => {
    setSelectedButton(button);
  };

  return (
    <div>
      <b>FirstChild</b>
      <div>
        <button onClick={() => handleClick("O")}>O</button>
        <button onClick={() => handleClick("X")}>X</button>
      </div>
      <div>
        <button onClick={incrementCount}>카운트 증가</button>
        <button onClick={removeCount}>카운트 리셋</button>
      </div>
    </div>
  );
}

export default FirstTest;