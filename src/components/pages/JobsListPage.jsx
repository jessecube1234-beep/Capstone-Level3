import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useJobs } from '../../hooks/useJobs'
import { filterJobs } from '../../lib/utils'

export default function JobsListPage() {
  console.log('JobsListPage rendered')

  // Fetch jobs from Supabase
  const { jobs, loading, error } = useJobs()

  // Store currently selected filter tags
  const [filters, setFilters] = useState([])

  // Derived data (pure function)
  const visibleJobs = filterJobs(jobs, filters)

  function addFilter(tag) {
    setFilters(prev =>
      prev.includes(tag) ? prev : [...prev, tag]
    )
  }

  function removeFilter(tag) {
    setFilters(prev => prev.filter(f => f !== tag))
  }

  function clearFilters() {
    setFilters([])
  }

  // Loading state
  if (loading) {
    return (
      <div style={{ color: 'white' }}>
        <p>Loading jobs...</p>
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div style={{ color: 'white' }}>
        <p role="alert">Error loading jobs: {error}</p>
      </div>
    )
  }

  // Empty state
  if (!jobs || jobs.length === 0) {
    return (
      <div style={{ color: 'white' }}>
        <p>No job listings available.</p>
      </div>
    )
  }

  // Main render
  return (
    <div style={{ color: 'white' }}>
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
        {visibleJobs.map(job => {
          const tags = [
            job.role,
            job.level,
            ...(job.languages ?? []),
            ...(job.tools ?? []),
          ]

          return (
            <li key={job.id}>
              <h3>
                <Link to={`/jobs/${job.id}`}>
                  {job.position}
                </Link>
              </h3>
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
    </div>
  )
}
