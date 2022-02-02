import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders learn react link', () => {
  render(<Home />);
  const text = screen.getByText(/Test/i);
  expect(text).toBeInTheDocument();
});
