import { HiArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieInfo = styled.div`
  display: flex;
  align-items: start;
  margin-top: 10px;
`;

export const MoviePoster = styled.img`
  width: 180px;
`;

export const MovieDescription = styled.div`
  margin-left: 20px;
`;

export const MovieDescriptionItem = styled.li`
  margin-bottom: 15px;
`;

export const AdditionalBox = styled.div`
  margin-top: 15px;
`;

export const AdditionalList = styled.div`
  display: flex;
  gap: 20px;
`;

export const AdditionalItem = styled.li`
  margin-top: 15px;

  :hover {
    color: orangered;
  }
`;

export const Border = styled.div`
  margin-top: 20px;
  border-bottom: 1px solid black;
`;

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  /* padding: 8px 0; */
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;

  :hover {
    color: orangered;
  }
`;

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="18" />
      {children}
    </StyledLink>
  );
};
