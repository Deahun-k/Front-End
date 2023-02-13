import React, { useState } from "react";

function App(props) {
  const [fishArr, setFishArr] = useState(["퇴근", "하고", "싶다"]);
  const [newFish, setNewFish] = useState("진짜루");

  return (
    <>
      <h1>Hello House</h1>
      <p>
        <input
          type="text"
          value={newFish}
          onChange={(e) => {
            setNewFish(e.target.value);
          }}/>
        <button onClick={(e) => {
          setFishArr([...fishArr, newFish]);
          // state가 변경 되면서 component가 다시 랜더링 된다.
          setNewFish("");
        }}>
          추가
        </button>
      </p>
      <ul>
        {fishArr.map((fish, idx) => {
          return <li key={idx}>{fish}</li>;
        })}
      </ul>
    </>
  );
}

export default AppEx02;