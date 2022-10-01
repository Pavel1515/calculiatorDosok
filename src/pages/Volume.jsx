import { useState } from "react";

function Volume() {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [long, setLong] = useState("");
  const [v, setV] = useState("");
  const numNubers = () => {
    let a =
      (Number(v) * 1000000) / (Number(width) * Number(height) * Number(long));
    return a;
  };
  const answer = numNubers(width, height, long, v);
  return (
    <div className="conatiner">
      <p>Обьем который нужен</p>

      <input
        type="text"
        onChange={(e) => {
          setV(e.target.value);
        }}
        placeholder="Обьем в метрах"
      />
      <p>Размеры досок</p>
      <div className="inputs">
        <input
          placeholder="в см"
          type="text"
          onChange={(e) => {
            setWidth(e.target.value);
          }}
        />
        <input
          placeholder="в см"
          type="text"
          onChange={(e) => {
            setHeight(e.target.value);
          }}
        />
        <input
          placeholder="в см"
          type="text"
          onChange={(e) => {
            setLong(e.target.value);
          }}
        />
      </div>

      <p>Ответ {answer}</p>
    </div>
  );
}

export default Volume;
