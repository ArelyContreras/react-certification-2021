// src/mocks/handlers.js
import { rest } from 'msw';
import youtubeApiMock from './youtube-videos-mock.json';

export const handlers = [
  rest.post('https://www.googleapis.com/youtube/v3/search', (req, res, ctx) => {


    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json(youtubeApiMock)
    )
  })
]