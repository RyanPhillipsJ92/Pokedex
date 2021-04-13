import { render, screen } from '@testing-library/react';
import SearchPokemon from './SearchPokemon';

test('renders learn react link', () => {
  render(<SearchPokemon />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
