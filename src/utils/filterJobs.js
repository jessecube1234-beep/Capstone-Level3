/**
 * filterJobs
 * ----------
 * Filters jobs based on selected tags using AND logic.
 *
 * @param {Array} jobs - List of job objects
 * @param {Array} activeFilters - Selected filter tags
 * @returns {Array} Filtered jobs
 */
export function filterJobs(jobs, activeFilters) {
  // No filters → return all jobs
  if (!activeFilters.length) {
    return jobs;
  }

  return jobs.filter(job => {
    const jobTags = [
      job.role,
      job.level,
      ...(job.languages || []),
      ...(job.tools || [])
    ].map(tag => tag.trim().toLowerCase());

    // AND logic: job must include ALL active filters
    return activeFilters.every(filter =>
      jobTags.includes(filter.trim().toLowerCase())
    );
  });
}