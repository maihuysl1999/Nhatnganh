import React, { useState } from "react";

function useStorage() {
  const listStudent = ["Huyen", "Hoa", "Hung", "Long"];
  const [index, setIndex] = useState(0)

  const next = () => {
    setIndex((index + 1) % listStudent.length)
  }

  const prev = () => {
    setIndex((index - 1 + listStudent.length) % listStudent.length)
  }

  return [listStudent, index, next, prev]
}

export default useStorage;