import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from '../components/App';

beforeEach(() => {
    render(<App />);
})

describe('<App />', () => {

    test('App - App Works & Load View', () => {
        //test both views
        const homeSection = screen.getByRole('heading');

        expect(homeSection).toHaveTextContent('Challenge');
        expect(homeSection).not.toHaveTextContent('challenge');
    });

    test('App - Load Navbar', () => {
        const Navbar = screen.getByRole('navigation');

        expect(Navbar).toBeInTheDocument();
    });

    test('App - Navbar Items', () => {
        const Navbar = screen.getByRole('navigation');

        expect(Navbar).toContainElement(screen.getByRole('button', {name: 'Hamburguer'}));
        expect(Navbar).toContainElement(screen.getByRole('textbox', {name: 'Search'}));
        expect(Navbar).toContainElement(screen.getByRole('checkbox', {name: 'Darkmode'}));
        expect(Navbar).toContainElement(screen.getByRole('button', {name: 'Login'}));
    });

})
