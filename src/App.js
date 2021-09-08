import React, { useState } from "react";
import "./App.css";
import useStorage from "./hooks/useStorage"

function App() {
  const [listStudent, index, next, prev] = useStorage();

  return (
    <div>
      <div className="listStudent">学生一覧：[Huyen, Hoa, Hung, Long]</div>
      <div className="listStudent">位置：{index + 1}</div>
      <div className="listStudent">名前：{listStudent[index]}</div>
      <button onClick={() => { prev() }} className="listStudent">
        prev
      </button>
      <button onClick={() => { next() }}>next</button>
    </div>
  );
}

export default App;
