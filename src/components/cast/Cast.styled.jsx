import styled from 'styled-components';

export const CastList = styled.ul`
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
`;

export const CastItem = styled.li`
  margin-top: 15px;
`;

export const CastDesc = styled.p`
  margin-top: 15px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 265px;
`;
