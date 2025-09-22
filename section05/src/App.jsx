import "./App.css";
import { useState } from "react";
import Register from "./components/Register";
import HookExam from "./components/HookExample";

// re-rendering 3가지
// 1. 자신의 state 값이 변경되었을 때
// 2. 자신이 제공받는 props가 변경되었을 때
// 3. 부모 component가 re-rendering되면 자식 component도 re-rendering된다.
// 따라서 관련이 없는 component는 분리하는게 좋다.

function App() {
  return (
    <>
      <HookExam />
    </>
  );
}

export default App;
