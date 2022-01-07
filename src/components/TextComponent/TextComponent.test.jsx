import { render, screen } from '@testing-library/react';
import { TextComponent } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<TextComponent/>', () => {
  it('should render TextComponent', () => {
    renderTheme(<TextComponent>children</TextComponent>);
    const paragraph = screen.getByText('children');

    expect(paragraph).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<TextComponent>children</TextComponent>);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render a paragraph with 24px font-size', () => {
    const { debug } = renderTheme(<TextComponent>children</TextComponent>);
    const paragraph = screen.getByText('children');

    expect(paragraph).toHaveStyleRule('font-size', theme.font.sizes.medium);
  });
});
