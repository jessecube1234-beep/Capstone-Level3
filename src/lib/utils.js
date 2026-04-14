/**
 * Filters jobs by matching all active filter tags.
 *
 * @param {Array} jobs - List of job objects
 * @param {string[]} filters - Active filter tags
 * @returns {Array} Filtered list of jobs
 */
export function filterJobs(jobs, filters) {
  // If no filters are active, return all jobs
  if (filters.length === 0) {
    return jobs
  }

  return jobs.filter(job => {
    const jobTags = [
      job.role,
      job.level,
      ...(job.languages ?? []),
      ...(job.tools ?? []),
    ]

    // Job must include every active filter
    return filters.every(filter =>
      jobTags.includes(filter)
    )
  })
}