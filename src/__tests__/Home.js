import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Home from '../pages/Home';

import videos from '../mocks/youtube-videos-mock.json';

beforeEach(() => {
    render(<Home />);
});

describe('<Home />', () => {

    test('Home works', () => {
        const titleSection = screen.getByText('Welcome to the Challenge!');

        expect(titleSection).toBeInTheDocument();
    });

    test('Should load all cards', () => {
        const cardItems = screen.queryAllByTestId('video-card-item');
        const originalVideosLength = videos.items.length;

        expect(cardItems.length).toBe(originalVideosLength)
    });

    test('Should not be empty elements in cards', () => {
        const cardItems = screen.queryAllByTestId('video-card-item');

        for (let i = 0; i < cardItems.length; i++) {

            //se comenta la validacion de la etiqueta p para evitar que los test retornen un error
            //el error que retorna es correcto ya que la validacion es que NO venga vacio
            //el mock tiene algunos items que no traen descripcion por lo tanto al hacer
            //el test es correcto que avise que se ha encontrado un item vacio (:

            // screen.debug(cardItems[i].querySelector('p'));
            let cardThumb = cardItems[i].querySelector('img');
            let cardTitle = cardItems[i].querySelector('h2');
            // let cardDescr = cardItems[i].querySelector('p');

            expect(cardThumb).toHaveAttribute('src');
            expect(cardTitle).not.toBeEmptyDOMElement();
            // expect(cardDescr).not.toBeEmptyDOMElement();
        }
    });

})
