import { render, screen } from '@testing-library/react';
import AdminPage from './AdminPage';

it('shows admin panel heading', () => {
  render(<AdminPage />);
  expect(screen.getByText(/admin panel/i)).toBeInTheDocument();
});
