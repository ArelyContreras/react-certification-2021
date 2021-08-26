import React from 'react'
import { Router } from 'react-router-dom'
import { render, fireEvent } from '@testing-library/react'
import { createMemoryHistory } from 'history';
import HomePage from '../pages/Home';
import PageNotFound from '../pages/PageNotFound';

const renderWithRouter = (component) => {
    const history = createMemoryHistory()
    return {
    ...render (
    <Router history={history}>
        {component}
    </Router>
    )
  }
}

// it('should render the home page', () => {

//   const { container, getByTestId } = renderWithRouter(<HomePage/>)

//   console.log(container.innerHTML)
//   expect(container.innerHTML).toMatch('Title')
// })
// it('should render the home page', () => {

//   const { container, getByTestId } = renderWithRouter(<VideoDetails/>)

//   console.log(container.innerHTML)
//   expect(container.innerHTML).toMatch('Title')
// })
it('should render the 404', () => {

  const { container, getByTestId } = renderWithRouter(<PageNotFound />)
  expect(container.innerHTML).toMatch('Page not found')
})