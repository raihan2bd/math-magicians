import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import Header from '../components/UI/Header';

describe('Test Header component with snapshot', () => {
  test('should match the snapshot', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Header />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('should include the logo', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    expect(
      screen.getByRole('heading', { name: 'Math Magicians', exact: false }),
    ).toBeInTheDocument();
  });
  test('should include links', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    expect(screen.getByRole('link', { name: 'Quote' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Calculator' }),
    ).toBeInTheDocument();
  });
});
