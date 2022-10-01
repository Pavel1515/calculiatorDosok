import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="conatiner">
      <Link to={"/boards"}>
        <p>Можно посчитать обьем</p>
      </Link>
      <Link to={"/volume"}>
        <p>Можно посчитать количество досок для опеределеного обьема обьема</p>
      </Link>
    </div>
  );
}

export default Home;
