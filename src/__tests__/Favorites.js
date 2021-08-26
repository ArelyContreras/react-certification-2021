import { render, screen } from '@testing-library/react';
import React from 'react';
import AppContext from '../providers/AppProvider';
import FavoritesPage from '../pages/Favorites';

describe('<Home />', () => {

    test('Home - View Loaded', async () => {
        // const titleSection = screen.getByRole('heading');

        // expect(titleSection).toHaveTextContent('Challenge');
        // expect(titleSection).not.toHaveTextContent('challenge');
        const response = await
        render(
            <AppContext>
                 <FavoritesPage />
             </AppContext>

        )
        // const sectionHome = screen.getByTestId("homeContainer");
        // expect(sectionHome).toBeInTheDocument();
    });

})
