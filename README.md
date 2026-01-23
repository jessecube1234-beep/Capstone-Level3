# Job Listings with Filtering

A React job listings application built as a capstone project.  
Users can browse jobs, filter them by tags, and view job details.

Based on the Frontend Mentor “Job Listings with Filtering” challenge.

---

## Features

- View job listings
- Filter jobs by role, level, languages, and tools
- AND-based filtering (jobs must match all selected filters)
- Remove individual filters or clear all filters
- Dynamic job detail routes

---

## Tech Stack

- React (Vite)
- Styled-components
- Supabase
- Vitest + React Testing Library
- Netlify

---

## Routes

- `/` — Job listings with filters  
- `/jobs/:id` — Job detail page

---

## Architecture Overview

- `useJobs` — fetches jobs from Supabase and manages loading/error state
- `filterJobs` — pure utility function that applies AND-based filtering logic
- `FilterBar`, `JobCard`, `TagPill` — presentational UI components
- `Header` — layout component (snapshot tested)

Filtering logic is separated from UI to allow unit testing.

---

## Testing

Testing is implemented using **Vitest**.

### Tests included
- **Unit test** for `filterJobs`
  - AND logic
  - edge cases (no filters, unknown tags, duplicates)
- **Component test** for `FilterBar`
  - verifies filters render
  - verifies Clear button triggers callback
- **Snapshot test** for `Header`

### Run tests
```bash
npm run test
```
### Run tests with coverage
```bash
npm run test -- --coverage
```
## Running Locally

```bash
npm install
npm run dev
```
## Deployment

The application is deployed on Netlify.
