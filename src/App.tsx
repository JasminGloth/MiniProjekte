import './App.scss';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { PageWelcome } from './pages/PageWelcome';
import { PageBooksorter } from './pages/PageBooksorter';
import { PageBookfilter } from './pages/PageBookfilter';

function App() {
	return (
		<div className="App">
			<h1>Info Site</h1>
			<nav>
				<NavLink to="/welcome">Welcome</NavLink>
				<NavLink to="/booksorter">Booksorter</NavLink>
				<NavLink to="/bookfilter">Bookfilter</NavLink>
			</nav>

			<Routes>
				<Route path="/welcome" element={<PageWelcome />} />
				<Route path="/booksorter" element={<PageBooksorter />} />
				<Route path="/bookfilter" element={<PageBookfilter />} />
				<Route path="/" element={<Navigate to="/welcome" replace />} />
			</Routes>
		</div>
	);
}

export default App;
