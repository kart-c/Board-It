import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, Login, Board } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/board/:boardId" element={<Board />} />
      </Routes>
    </>
  );
}

export default App;
