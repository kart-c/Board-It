import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './pages';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Login />} />
			</Routes>
		</>
	);
}

export default App;
