// Vitest utilities
import { describe, it, expect, vi } from 'vitest';

// React Testing Library helpers
import { render, screen, fireEvent } from '@testing-library/react';

// ThemeProvider is required for styled-components
import { ThemeProvider } from 'styled-components';

// Component under test
import FilterBar from '../components/ui/FilterBar';

// Shared theme used across the app
import theme from '../styles/theme';

describe('FilterBar component', () => {
  it('renders filter pills and calls onClear when Clear is clicked', () => {
    // Mock callback functions
    const onRemove = vi.fn();
    const onClear = vi.fn();

    // Render FilterBar with active filters
    render(
      <ThemeProvider theme={theme}>
        <FilterBar
          filters={['Frontend', 'React']}
          onRemove={onRemove}
          onClear={onClear}
        />
      </ThemeProvider>
    );

    // Verify filter pills render
    expect(screen.getByText('Frontend')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();

    // Click the Clear button
    fireEvent.click(screen.getByText('Clear'));

    // Verify onClear callback was called
    expect(onClear).toHaveBeenCalledTimes(1);
  });
});