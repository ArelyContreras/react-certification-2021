import { render, screen } from '@testing-library/react';
import React from 'react';
import AppProvider from '../providers/AppProvider';

import HomePage from '../pages/Home';
import axios from '../config/axios';
import videosMock from '../mocks/youtube-videos-mock.json';

jest.mock('../config/axios');

// jest.mock('../helpers/helpers', () => ({
//     __esModule: true,
//     gapiClient: jest.fn(() => 'Mocked someFunction!')
//   }));
describe('YT', () => {
    test('YT - Fetch API Home', async () => {
        // gapi
        // console.log(gapiClient)
        axios.mockReturnValue(
            Promise.resolve({
                // console.log(videosMock)
                // data: { ...videosMock, videos: [videosMock.items]}
                status: 200,
                data: {...videosMock, videos: [videosMock.items]}
                // data: { ...videosMock, items: [videosMock.items[0]]},
            }).then(function(r){
                // console.log(r)
                const videos = r.data.items;

            })
        )
        render(
            <AppProvider>
                <HomePage />
            </AppProvider>
        )
        const sectionHome = screen.getByTestId("homeContainer");
        expect(sectionHome).toBeInTheDocument();
        // expect(axios).toBeCalledWith({ url: 'https://www.googleapis.com/youtube/v3'});
        // console.log(axios.response)
        // const title = screen.getByText(/Title/i);
        // expect(title).toBeInTheDocument();
        // expect(axios).toHaveBeenCalled();
        // expect(await screen.findAllByRole('gridcell')).toBeInTheDocument();
    });

})
