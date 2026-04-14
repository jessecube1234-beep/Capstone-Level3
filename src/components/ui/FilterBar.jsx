import styled from 'styled-components';
import TagPill from './TagPill';

const Bar = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};

  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const ClearButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.muted};
  font-weight: 700;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;
  }
`;

// Displays the currently active job filters and provides
// controls to remove individual filters or clear all filters.
// This component is purely presentational and does not own state.
export default function FilterBar({ filters, onRemove, onClear }) {
  // Hide the filter bar when no filters are active
  if (filters.length === 0) return null;

  return (
    <Bar>
      {/* Active filter tags */}
      <Tags>
        {filters.map(tag => (
          <TagPill
            key={tag}
            label={tag}
            removable
            onClick={() => onRemove(tag)}
          />
        ))}
      </Tags>

      {/* Clear all active filters */}
      <ClearButton onClick={onClear}>
        Clear
      </ClearButton>
    </Bar>
  );
}