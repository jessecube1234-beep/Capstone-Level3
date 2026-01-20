import { useJobs } from '../hooks/useJobs'

export default function JobsListPage() {
  const { jobs, loading, error } = useJobs()

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

  // Render list
  return (
    <main>
      <ul>
        {jobs.map(job => (
          <li key={job.id}>
            <h3>{job.position}</h3>
            <p>{job.company}</p>
            <p>
              {job.role} • {job.level}
            </p>
            <p>
              {job.posted_at} • {job.contract} • {job.location}
            </p>
          </li>
        ))}
      </ul>
    </main>
  )
}
