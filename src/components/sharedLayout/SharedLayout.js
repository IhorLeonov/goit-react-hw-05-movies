import { Outlet } from 'react-router-dom';
import { GlobalStyle } from 'components/constants/GlobalStyle';
import { Suspense } from 'react';

import { Container, Header, Link } from 'components/app/App.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <main>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <GlobalStyle />
    </Container>
  );
};
