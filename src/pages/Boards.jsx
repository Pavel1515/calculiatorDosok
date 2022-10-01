import React from "react";
import { useState } from "react";

function Boards() {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [long, setLong] = useState("");
  const [numbers, setNumbers] = useState("");
  const V = () => {
    let sv =
      ((Number(width) * Number(height) * Number(long)) / 1000000) *
      Number(numbers);
    return sv;
  };
  const answer = V(width, height, long);
  return (
    <div className="conatiner">
      <p>Писать все стороны в сантиметрах</p>
      <div className="inputs">
        <input
          type="text"
          onChange={(e) => {
            setWidth(e.target.value);
          }}
          placeholder="cм"
        />
        <input
          type="text"
          onChange={(e) => {
            setHeight(e.target.value);
          }}
          placeholder="cм"
        />
        <input
          type="text"
          onChange={(e) => {
            setLong(e.target.value);
          }}
          placeholder="cм"
        />
      </div>
      <p>количество досок</p>
      <input
        type="text"
        onChange={(e) => {
          setNumbers(e.target.value);
        }}
        placeholder="Количество досок"
      />
      <p>Ответ: {answer}метров кубических</p>
    </div>
  );
}

export default Boards;
