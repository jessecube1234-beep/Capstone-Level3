// Vitest utilities for defining and running tests
import { describe, it, expect } from 'vitest';

// React Testing Library helper for rendering components in a test environment
import { render } from '@testing-library/react';

// ThemeProvider is required because Header uses styled-components theme values
import { ThemeProvider } from 'styled-components';

// Header component under test
import Header from '../components/layout/Header';

// Shared theme object used across the application
import theme from '../styles/theme';

describe('Header snapshot', () => {
  it('matches the snapshot', () => {
    // Render the Header component wrapped in ThemeProvider
    // so styled-components can access theme values
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );

    // Snapshot test ensures the rendered markup
    // does not change unexpectedly over time
    expect(container).toMatchSnapshot();
  });
});