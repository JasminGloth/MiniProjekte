import './App.scss';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { PageWelcome } from './pages/PageWelcome';
import { PageBooksorter } from './pages/PageBooksorter';
import { PageBookfilter } from './pages/PageBookfilter';
import { PageBookFilterAndSort } from './pages/PageBookFilterAndSort';
import { PageCheckboxFilter } from './pages/PageCheckboxFilter';
import { PageKalender } from './pages/PageKalender';

function App() {
	return (
		<div className="App">
			<h1>Mini Projekte</h1>
			<nav>
				<NavLink to="/welcome">Welcome</NavLink>
				<NavLink to="/booksorter">Booksorter</NavLink>
				<NavLink to="/bookfilter">Bookfilter</NavLink>
				<NavLink to="/bookfilterandsort">BookFilterAndSort</NavLink>
				<NavLink to="/checkboxfilter">CheckboxFilter</NavLink>
				<NavLink to="/kalender">Kalender</NavLink>
			</nav>

			<Routes>
				<Route path="/welcome" element={<PageWelcome />} />
				<Route path="/booksorter" element={<PageBooksorter />} />
				<Route path="/bookfilter" element={<PageBookfilter />} />
				<Route
					path="/bookfilterandsort"
					element={<PageBookFilterAndSort />}
				/>
				<Route path="/checkboxfilter" element={<PageCheckboxFilter />} />
				<Route path="/kalender" element={<PageKalender />} />
				<Route path="/" element={<Navigate to="/welcome" replace />} />
			</Routes>
		</div>
	);
}

export default App;
