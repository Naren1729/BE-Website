import { render, screen } from '@testing-library/react';
import App from './App';

test('renders company tagline', () => {
  render(<App />);
  const tagline = screen.getByText(/through science and compassion/i);
  expect(tagline).toBeInTheDocument();
});
