import { useState } from 'react'
import { useJobs } from '../hooks/useJobs'

export default function JobsListPage() {
  // Fetch jobs from Supabase via custom hook
  const { jobs, loading, error } = useJobs()
  // Store currently selected filter tags
  const [filters, setFilters] = useState([])

  // Add a filter when a tag is clicked
  // Prevents duplicates
  function addFilter(tag) {
    setFilters(prev =>
      prev.includes(tag) ? prev : [...prev, tag]
    )
  }

  // Remove a single filter tag
  function removeFilter(tag) {
    setFilters(prev => prev.filter(f => f !== tag))
  }

  // Clear all filters
  function clearFilters() {
    setFilters([])
  }

  // Loading state
  if (loading) {
    return (
      <main>
        <p>Loading jobs...</p>
      </main>
    )
  }

  // Error state
  if (error) {
    return (
      <main>
        <p role="alert">Error loading jobs: {error}</p>
      </main>
    )
  }

  // Empty state
  if (jobs.length === 0) {
    return (
      <main>
        <p>No job listings available.</p>
      </main>
    )
  }



  // Render list MAIN RENDER
  
  return (
    <main>
      {filters.length > 0 && (
        <div>
          {filters.map(tag => (
            <button key={tag} onClick={() => removeFilter(tag)}>
              {tag} ×
            </button>
          ))}
          <button onClick={clearFilters}>Clear</button>
        </div>
      )}

      <ul>
        {jobs.map(job => {
          const tags = [
            job.role,
            job.level,
            ...(job.languages ?? []),
            ...(job.tools ?? []),
          ]
          return (
            <li key={job.id}>
              <h3>{job.position}</h3>
              <p>{job.company}</p>
              <p>
                {job.role} • {job.level}
              </p>
              <p>
                {job.posted_at} • {job.contract} • {job.location}
              </p>

              <div>
                {tags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => addFilter(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
