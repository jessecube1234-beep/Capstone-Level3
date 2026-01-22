import TagPill from './TagPill';

// Displays the currently active job filters and provides
// controls to remove individual filters or clear all filters.
// This component is purely presentational and does not own state.
export default function FilterBar({ filters, onRemove, onClear }) {

// Hide the filter bar when no filters are active
  if (filters.length === 0) return null;

  return (
    <div className="filter-bar">

      {/* Active filter tags */}
      <div className="filter-tags">
        {filters.map(tag => (
          <TagPill
            key={tag}
            label={tag}
            removable
            onClick={() => onRemove(tag)}
          />
        ))}
      </div>

      {/* Clear all active filters */}
      <button onClick={onClear} className="clear-btn">
        Clear
      </button>
    </div>
  );
}