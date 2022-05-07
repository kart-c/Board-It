import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Board, Login } from './pages';

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/board" element={<Board />} />
      </Routes>
    </>
  );
}

export default App;
