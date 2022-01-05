import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';
import Home from './index';

it('renders learn react link', () => {
  const { debug } = renderTheme(<Home />);
  const headingContainer = screen.getByRole('heading', {
    name: 'Hello',
  }).parentElement;

  // expect(headingContainer).toHaveStyleRule('background', 'red');
  expect(headingContainer).toMatchSnapshot();
});
