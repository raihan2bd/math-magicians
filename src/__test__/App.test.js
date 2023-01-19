import { render, screen } from '@testing-library/react';
import { MemoryRouter, BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import App from '../App';

describe('testing App.js with snapshot', () => {
  test('test App.js dom snapshot', () => {
    const app = renderer
      .create(
        <BrowserRouter>
          <App />
        </BrowserRouter>,
      )
      .toJSON();

    expect(app).toMatchSnapshot();
  });

  test('testing home routes', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByText('Home')).toBeInTheDocument();

    expect(screen.getByText('Welcome to our page!')).toBeInTheDocument();
    expect(screen.queryByText('Lets do some Math!')).toBeNull();
    expect(screen.queryByText('Refresh')).toBeNull();
  });

  test('test calculator page', () => {
    render(
      <MemoryRouter initialEntries={['/calculator']}>
        <App />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole('heading', { name: 'Lets do some Math!' }),
    ).toBeInTheDocument();
  });

  test('test quote page', () => {
    render(
      <MemoryRouter initialEntries={['/quote']}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByRole('button', { name: 'Refresh' })).toBeInTheDocument();
  });
});
