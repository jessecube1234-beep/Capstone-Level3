
// Import styled-components for layout styling
import styled from 'styled-components';

// Import Header so it appears on every page
import Header from './Header';

/*
  PageWrapper:
  - Wraps the entire application
  - Sets background color using the theme
  - Ensures full viewport height
*/
const PageWrapper = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

/*
  Content:
  - Wraps page content (children)
  - Centers content and controls max width
  - Negative margin pulls content upward into the header area
*/
const Content = styled.main`
  max-width: 1100px;
  margin: -60px auto 0;
  padding: ${({ theme }) => theme.spacing.lg};
`;

/*
  MainLayout:
  - Provides shared layout structure for all pages
  - Includes Header and wraps page content
*/
export default function MainLayout({ children }) {
  return (
    <PageWrapper>
      <Header />
      <Content>{children}</Content>
    </PageWrapper>
  );
}