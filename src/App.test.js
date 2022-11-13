import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import { MemoryRouter } from "react-router-dom";

test('renders App', () => {
	render(<MemoryRouter><App /></MemoryRouter>)
	const headerElement = screen.getByText(/Tick-A-Pick/i);
	expect(headerElement).toBeInTheDocument();
});
