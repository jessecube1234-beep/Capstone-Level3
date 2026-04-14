import { useState } from 'react'
import { useJobs } from '../../hooks/useJobs'
import { filterJobs } from '../../lib/utils'
import JobCard from '../ui/JobCard.jsx'
import FilterBar from '../ui/FilterBar'



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
    return <p>Loading jobs...</p>
  }

  // Error state
  if (error) {
    return <p role="alert">Error loading jobs: {error}</p>
  }

  // Empty state
  if (!jobs || jobs.length === 0) {
    return <p>No job listings available.</p>
  }

  // Main render
  return (
    <div>
      {/* Filter bar for active filters */}
      <FilterBar
        filters={filters}
        onRemove={removeFilter}
        onClear={clearFilters}
      />

      <ul>
        {visibleJobs.map(job => (
          <JobCard
            key={job.id}
            job={job}
            onTagClick={addFilter}
          />
        ))}
      </ul>
    </div>
  )
}
