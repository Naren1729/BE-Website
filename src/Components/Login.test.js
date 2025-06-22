import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Login from './Login';

it('renders login form', () => {
  render(
    <BrowserRouter>
      <Login onLogin={() => {}} />
    </BrowserRouter>
  );
  expect(screen.getByRole('heading', { name: /login/i })).toBeInTheDocument();
  expect(screen.getByRole('textbox')).toBeInTheDocument();
});
