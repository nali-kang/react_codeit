import { useState } from "react";
import Board from "./Board";
import Button from "./Button";

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [story, setStory] = useState([]);
  const [otherStory, setOtherStory] = useState([]);

  const handleRolled = () => {
    const nextNum = random(6);
    const nextOtherNum = random(6);

    setStory([...story, nextNum]);
    setOtherStory([...otherStory, nextOtherNum]);
  };

  const handleReset = () => {
    setStory([]);
    setOtherStory([]);
  };

  return (
    <div>
      <div>
        <button onClick={handleRolled}>던지기</button>
        <button onClick={handleReset}>처음으로</button>
      </div>
      <div>
        <Board name="나" color="blue" history={story} />
        <Board name="상대" color="red" history={otherStory} />
      </div>
    </div>
  );
}

export default App;
