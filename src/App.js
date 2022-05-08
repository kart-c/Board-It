import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, Login, Board, User, ErrorPage } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/board/:boardId" element={<Board />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
