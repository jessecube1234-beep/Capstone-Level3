import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout
import MainLayout from '@/components/layout/MainLayout';

// Pages
import JobsListPage from '@/components/pages/JobsListPage';
import JobDetailsPage from '@/components/pages/JobDetailsPage';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<JobsListPage />} />
          <Route path="/jobs/:id" element={<JobDetailsPage />} />
          <Route path="*" element={<p>Page not found</p>} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;