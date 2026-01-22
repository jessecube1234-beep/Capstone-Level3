// Import styled-components so we can create styled elements
import styled from 'styled-components';

/*
  HeaderWrapper:
  - This is the outer container for the header
  - Uses theme colors so styling is centralized and reusable
*/
const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 160px;
  display: flex;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing.lg};
`;

/*
  HeaderContent:
  - Centers the content horizontally
  - Keeps header width consistent with the rest of the app
*/
const HeaderContent = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
`;

/*
  Title:
  - Styled heading using theme colors
  - Demonstrates using the theme inside styled-components
*/
const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.75rem;
  font-weight: 700;
`;

// Header component
export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <Title>Job Listings</Title>
      </HeaderContent>
    </HeaderWrapper>
  );
}