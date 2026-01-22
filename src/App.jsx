import { BrowserRouter, Routes, Route } from 'react-router-dom';
import JobsListPage from './components/pages/JobsListPage.jsx';
import JobDetailsPage from './components/pages/JobDetailsPage.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<JobsListPage />} />
        <Route path="/jobs/:id" element={<JobDetailsPage />} />
        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App