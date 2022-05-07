import './App.css';
import { Route, Routes } from 'react-router-dom';
import Board from './pages/Board/Board';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Board />} />
    </Routes>
  );
}

export default App;
