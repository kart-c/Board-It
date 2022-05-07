import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home, Login } from './pages';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/home" element={<Home />} />
			</Routes>
		</>
	);
}

export default App;
