import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent, waitFor, within } from '@testing-library/react';
import AppProvider from '../providers/AppProvider';

import '@testing-library/jest-dom';

import App from '../components/App';
import Switch from '../components/Switch';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';


describe('Navbar elements Exist', () => {

    // test('App - App Works & Load View', () => {
    //     //test both views
    //     const homeSection = screen.getByRole('heading');

    //     expect(homeSection).toBeInTheDocument();
    // });
    beforeEach(() => {
        render(<App />);
    })

    test('Navbar - Should load Navbar', () => {
        const Navbar = screen.getByRole('navigation');

        expect(Navbar).toBeInTheDocument();
    });


    test('Navbar - Navbar should work sidebar', () => {
        const Navbar = screen.getByRole('navigation');

        expect(Navbar).toContainElement(screen.getByRole('button', {name: 'Hamburguer'}));
        expect(Navbar).toContainElement(screen.getByRole('listitem'));
    });
    test('Navbar - Navbar should have searchbar', () => {
        const Navbar = screen.getByRole('navigation');

        expect(Navbar).toContainElement(screen.getByRole('textbox', {name: 'Search'}));
    });


    test('Navbar - Navbar exist darkmode', () => {
        const Navbar = screen.getByRole('navigation');

        expect(Navbar).toContainElement(screen.getByRole('checkbox', {name: 'Darkmode'}));
    });


    test('Navbar - Navbar should work login', () => {
        const Navbar = screen.getByRole('navigation');

        expect(Navbar).toContainElement(screen.getByRole('button', {name: 'Login'}));
    });

})

describe('On click of darkmode should change', () => {
    const fireDarkMode = () => {
        fireEvent.click(screen.getByRole('checkbox', {name: 'Darkmode'}))
    }
    test('should change darkmode', async () =>{
        render(
            <AppProvider>
                <Switch></Switch>
            </AppProvider>
        )
        const DarkModeButton = screen.getByRole('checkbox', {name: 'Darkmode'});

        expect(DarkModeButton).not.toBeChecked();
        expect(DarkModeButton).toHaveAttribute('data-theme', 'light');
        fireDarkMode();
        expect(DarkModeButton).toHaveAttribute('data-theme', 'dark');
        expect(DarkModeButton).toBeChecked();
    })
})

describe('On click of hamburguer', () => {
    const fireOpenSidebar = () => {
        fireEvent.click(screen.getByRole('button', {name: 'Hamburguer'}))
    }
    test('should open sidebar', async () =>{
        render(
            <BrowserRouter>
                <AppProvider>
                    <Sidebar></Sidebar>
                </AppProvider>
            </BrowserRouter>
        )
        const Hamburguer = screen.getByRole('button', {name: 'Hamburguer'});
        expect(screen.getByTestId('sidebar')).toHaveStyle('visibility: hidden');
        fireOpenSidebar();
        expect(screen.getByTestId('sidebar')).toHaveStyle('visibility: visible');
    })
})
