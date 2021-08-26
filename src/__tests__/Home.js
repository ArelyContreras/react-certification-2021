import { render, screen } from '@testing-library/react';
import React from 'react';
import AppContext from '../providers/AppProvider';

import HomePage from '../pages/Home';

import App from '../components/App';
// src/setupTests.js
import { server } from '../mocks/server.js';
// Establish API mocking before all tests.
beforeAll(() => server.listen());
// Clean up after the tests are finished.
afterAll(() => server.close());

// beforeEach(() => {
//     render(<Home />);
// });

describe('<Home />', () => {

    test('Home - View Loaded', async () => {
        // const titleSection = screen.getByRole('heading');

        // expect(titleSection).toHaveTextContent('Challenge');
        // expect(titleSection).not.toHaveTextContent('challenge');
        const response = await
        render(
            <AppContext>
                 <HomePage />
             </AppContext>

        )
        const sectionHome = screen.getByTestId("homeContainer");
        expect(sectionHome).toBeInTheDocument();
    });

})
