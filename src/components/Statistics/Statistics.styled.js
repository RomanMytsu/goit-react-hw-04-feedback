import styled from 'styled-components';

export const StatisticsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  max-width: 100%;
`;
export const StatisticsItem = styled.li`
  display: flex;
  justify-content: space-between;
  max-width: 328px;
  padding-bottom: 5px;
  border-bottom: 1px solid black;
  gap: 20px;
`;

export const StatisticsText = styled.span`
  font-size: 28px;
`;
