import { render, screen } from '@testing-library/react';
import { TextComponent } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<TextComponent/>', () => {
  it('should render', () => {
    renderTheme(<TextComponent>children</TextComponent>);

    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
