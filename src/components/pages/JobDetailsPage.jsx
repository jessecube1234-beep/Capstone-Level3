import { useParams, Link } from 'react-router-dom'
import { useJobs } from '../../hooks/useJobs'

export default function JobDetailsPage() {
    // Read the dynamic `id` from the URL (/jobs/:id)
    const { id } = useParams()

    // Fetch all jobs using the shared data hook
    const { jobs, loading, error } = useJobs()

    // While jobs are loading, show a loading state
    if (loading) {
        return <p>Loading job...</p>
    }

    // If the jobs request failed, show an error message
    if (error) {
        return <p>Error loading job</p>
    }

    // Find the job that matches the URL param
    // Convert job.id to string to safely compare with route param
    const job = jobs.find(job => String(job.id) === id)

    // If no matching job is found render a not found message
    if (!job) {
        return (
            <div>
                <h2>Job not found</h2>
                <Link to="/">Back to jobs</Link>
            </div>
        )
    }

    // Render job details when a matching job is found
    return (
        <div>
            <Link to="/">← Back to jobs</Link>

            <h2>{job.position}</h2>
            <p>{job.company}</p>
            <p>
                {job.role} • {job.level}
            </p>
            <p>
                {job.contract} • {job.location}
            </p>

            <div>
                {[job.role, job.level, ...(job.languages ?? []), ...(job.tools ?? [])].map(
                    tag => (
                        <span key={tag} style={{ marginRight: '0.5rem' }}>
                            {tag}
                        </span>
                    )
                )}
            </div>
        </div>
    )
}