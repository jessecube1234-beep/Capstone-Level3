import styled from 'styled-components'
import { Link } from 'react-router-dom'
import TagPill from './TagPill'

import photosnap from '../../assets/logos/photosnap.svg'
import manage from '../../assets/logos/manage.svg'
import account from '../../assets/logos/account.svg'
import eyecam from '../../assets/logos/eyecam-co.svg'
import faceit from '../../assets/logos/faceit.svg'
import insure from '../../assets/logos/insure.svg'
import loopStudios from '../../assets/logos/loop-studios.svg'
import myhome from '../../assets/logos/myhome.svg'
import shortly from '../../assets/logos/shortly.svg'
import airFilter from '../../assets/logos/the-air-filter-company.svg'

const Card = styled.li`
  border-left: ${({ $featured, theme }) =>
    $featured ? `5px solid ${theme.colors.primary}` : '5px solid transparent'};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};

  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.08);
`

const Logo = styled.img`
  width: 88px;
  height: 88px;
`

const Info = styled.div`
  flex: 1;
`

const Meta = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.9rem;
`

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`

const logoMap = {
  Photosnap: photosnap,
  Manage: manage,
  Account: account,
  'Eyecam Co.': eyecam,
  FaceIt: faceit,
  Insure: insure,
  'Loop Studios': loopStudios,
  MyHome: myhome,
  Shortly: shortly,
  'The Air Filter Company': airFilter,
}

export default function JobCard({ job, onTagClick }) {
  const tags = [
    job.role,
    job.level,
    ...(job.languages || []),
    ...(job.tools || []),
  ]

  return (
    <Card $featured={job.featured}>
      {/* Company logo */}
      <Logo src={logoMap[job.company]} alt={`${job.company} logo`} />

      {/* Job info (clickable) */}
      <Info>
        <Link to={`/jobs/${job.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <p><strong>{job.company}</strong></p>
          <h3>{job.position}</h3>
        </Link>

        <Meta>
          {job.posted_at} • {job.contract} • {job.location}
        </Meta>
      </Info>

      {/* Job tags */}
      <Tags>
        {tags.map(tag => (
          <TagPill
            key={tag}
            label={tag}
            onClick={onTagClick}
          />
        ))}
      </Tags>
    </Card>
  )
}