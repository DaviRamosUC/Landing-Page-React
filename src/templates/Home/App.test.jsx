import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';
import Home from './index';

describe('<Home/>', () => {
  it('should render home', () => {
    renderTheme(<Home />);
  });
});
