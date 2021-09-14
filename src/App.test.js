import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const message = screen.getByText(/Click on the + in order to get image recommendations/i);
  expect(message).toBeInTheDocument();
});
