import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Register from './Register';

it('renders register form', () => {
  render(
    <BrowserRouter>
      <Register />
    </BrowserRouter>
  );
  expect(screen.getByRole('heading', { name: /register/i })).toBeInTheDocument();
  expect(screen.getByRole('textbox')).toBeInTheDocument();
});
