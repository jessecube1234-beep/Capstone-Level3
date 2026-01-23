// Vitest helpers for unit testing
import { describe, it, expect } from 'vitest';

// Import the pure filtering function
import { filterJobs } from '../lib/utils';

const mockJobs = [
  {
    id: 1,
    role: 'Frontend',
    level: 'Junior',
    languages: ['JavaScript'],
    tools: ['React'],
  },
  {
    id: 2,
    role: 'Backend',
    level: 'Senior',
    languages: ['Python'],
    tools: ['Django'],
  },
];

describe('filterJobs', () => {
  it('returns all jobs when no filters are applied', () => {
    const result = filterJobs(mockJobs, []);
    expect(result).toHaveLength(2);
  });

  it('applies AND logic when multiple filters are selected', () => {
    const result = filterJobs(mockJobs, ['Frontend', 'React']);
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe(1);
  });

  it('returns an empty array for unknown filters', () => {
    const result = filterJobs(mockJobs, ['Ruby']);
    expect(result).toHaveLength(0);
  });

  it('handles duplicate filters correctly', () => {
    const result = filterJobs(mockJobs, ['Frontend', 'Frontend']);
    expect(result).toHaveLength(1);
  });
});