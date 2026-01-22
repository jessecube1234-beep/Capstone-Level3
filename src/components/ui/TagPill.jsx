import styled from 'styled-components';

/**
 * Reusable tag button used for job tags and active filters.
 *
 * @param {Object} props
 * @param {string} props.label - Text displayed inside the tag
 * @param {() => void} props.onClick - Called when the tag is clicked
 * @param {boolean} [props.removable=false] - Whether the tag can be removed
 */
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

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }

  ${({ removable }) =>
        removable &&
        `
      padding-right: 0.5rem;
    `}
`;

const RemoveIcon = styled.span`
  font-size: 1rem;
  line-height: 1;
`;
export default function TagPill({ label, onClick, removable = false }) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`tag-pill ${removable ? 'removable' : ''}`}
        >
            {label}
            {removable && <span className="remove">×</span>}
        </button>
    );
}