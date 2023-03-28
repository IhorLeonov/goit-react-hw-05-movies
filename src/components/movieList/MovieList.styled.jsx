import styled from 'styled-components';

export const MovieListStyled = styled.ul`
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
`;

export const MovieItem = styled.li`
  cursor: pointer;
`;

export const MoviePoster = styled.img`
  width: 280px;
  height: 420px;
`;

export const MovieTitle = styled.p`
  /* padding: 4px; */
  margin-top: 15px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 265px;

  :hover {
    color: orangered;
  }
`;
