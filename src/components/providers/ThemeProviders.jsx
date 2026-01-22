import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { GlobalStyles } from '../../styles/GlobalStyles';

export default function ThemeProvider({ children }) {
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </StyledThemeProvider>
  )
}