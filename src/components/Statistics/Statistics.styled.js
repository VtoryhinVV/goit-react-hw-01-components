import styled from '@emotion/styled';

export const SectionStatistics = styled.section`
  background-color: white;
  text-align: center;
  box-shadow: 8px 11px 23px -4px rgba(0, 0, 0, 0.52);
  border-radius: 6px;
  width: 50%;
  overflow: hidden;
`;

export const Title = styled.h2`
  font-size: 24px;
  color: grey;
  padding: 20px;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;

  color: #ddd8e3;
`;

export const ItemList = styled.li`
  display: flex;
  flex-direction: column;
  width: 20%;
  padding: 10px;
  gap: 10px;
  box-shadow: inset 0px 0px 18px -4px rgba(0, 0, 0, 0.76);
`;

export const LabelSpan = styled.span`
  font-size: 16px;
`;

export const ParcentageSpan = styled.span`
  font-size: 24px;
  font-weight: 600;
`;
