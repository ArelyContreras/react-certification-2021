import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from '../components/App';

beforeEach(() => {
    render(<App />);
})

describe('<App />', () => {

    test('App works', () => {
        const appComponent = screen.getByTestId('app-component');
        const titleSection = screen.getByTestId('page-name');

        expect(appComponent).toBeInTheDocument();
        expect(titleSection).toHaveTextContent('Welcome to the Challenge!');
        expect(titleSection).not.toHaveTextContent('welcome to the challenge');
    });

    test('Load Navbar', () => {
        const Navbar = screen.getByTestId('navbar-component');

        expect(Navbar).toBeInTheDocument();
    });
    
    test('Navbar Items', () => {
        const Navbar = screen.getByTestId('navbar-component');

        expect(Navbar).toContainElement(screen.getByTestId('navbar--hamburguer'));
        expect(Navbar).toContainElement(screen.getByTestId('navbar--search'));
        expect(Navbar).toContainElement(screen.getByTestId('navbar--darkmode'));
        expect(Navbar).toContainElement(screen.getByTestId('navbar--login'));
    });

    test('Load Home', () => {
        const homeSection = screen.getByTestId('home-view');

        expect(homeSection).toBeInTheDocument();
    });



})
