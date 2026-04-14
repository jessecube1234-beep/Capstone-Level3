// Import styled-components to create styled React components
import styled from 'styled-components';

/**
 * TagPill
 * -------
 * Reusable tag button used for:
 * - job tags on JobCard components
 * - active filter tags that can be removed
 *
 * Props:
 * @param {string} label - Text displayed inside the tag
 * @param {function} onClick - Function called when the tag is clicked
 * @param {boolean} removable - Whether the tag shows a remove (×) icon
 */

// Styled button for the tag pill
// Uses theme values for consistent colors, spacing, and border radius
// NOTE: `$removable` is a transient prop so it does not reach the DOM
const Pill = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;

  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: ${({ theme }) => theme.radius.sm};

  padding: 0.5rem 0.75rem;
  font-size: 0.85rem;
  font-weight: 700;

  cursor: pointer;

  // Hover state improves accessibility and user feedback
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }

  // If the tag is removable, adjust padding to fit the remove icon
  ${({ $removable }) =>
    $removable &&
    `
      padding-right: 0.5rem;
    `}
`;

// Styled remove icon shown when the tag is removable
const RemoveIcon = styled.span`
  font-size: 1rem;
  line-height: 1;
`;

// TagPill component
export default function TagPill({ label, onClick, removable = false }) {
  return (
    <Pill
      type="button"
      onClick={() => onClick(label)}
      $removable={removable}
    >
      {label}
      {removable && <RemoveIcon aria-hidden="true">×</RemoveIcon>}
    </Pill>
  );
}