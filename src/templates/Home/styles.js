import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';

export const Wrapper = styled.div`
  ${(props) => css`
    background: ${theme.colors.mainBg};
  `}
`;