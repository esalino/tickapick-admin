import './App.css';
import { Link } from "react-router-dom";
import React from 'react';

function App() {
	return (
		<div className="Nav">
			<nav>
				<Link to="/">Home</Link>
				<Link to="/CreateQuestion">Create Question</Link>
			</nav>
		</div>
	);
}

export default App;
