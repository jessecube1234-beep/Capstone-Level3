/**
 * Reusable tag button used for job tags and active filters.
 *
 * @param {Object} props
 * @param {string} props.label - Text displayed inside the tag
 * @param {() => void} props.onClick - Called when the tag is clicked
 * @param {boolean} [props.removable=false] - Whether the tag can be removed
 */
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