import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, Login, Board, User, ErrorPage } from "./pages";
import { RequiresAuth } from "./RequiresAuth";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <RequiresAuth>
              <Home />
            </RequiresAuth>
          }
        />
        <Route
          path="/board/:boardId"
          element={
            <RequiresAuth>
              <Board />
            </RequiresAuth>
          }
        />
        <Route
          path="/user"
          element={
            <RequiresAuth>
              <User />
            </RequiresAuth>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
