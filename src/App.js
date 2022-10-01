import { Routes, Route } from "react-router-dom";
import Boards from "./pages/Boards";
import Home from "./pages/Home";
import Volume from "./pages/Volume";
import "./index.css";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/boards" element={<Boards />} />
      <Route path="/volume" element={<Volume />} />
    </Routes>
  );
}

export default App;
