import styled from '@emotion/styled';

export const TableTransaction = styled.table`
  border-collapse: collapse;
  box-shadow: 8px 11px 23px -4px rgba(0, 0, 0, 0.52);
  border-radius: 15px;
  overflow: hidden;
`;

export const Thead = styled.thead`
  background-color: #49b4b8;
`;

export const CaptionTransaction = styled.th`
  font-weight: 500;
  color: white;
  text-transform: uppercase;
  padding: 10px 100px;

  border-right: 1px solid white;

  &:nth-last-of-type(1) {
    border-right: none;
  }
`;

export const TdTransaction = styled.td`
  padding: 10px;
  border: 1px solid #fcf2f2;

  text-transform: capitalize;
  text-align: center;
  color: #77777c;
  &:nth-of-type(1) {
    text-align: start;
    padding-left: 10%;
  }
`;

export const Tr = styled.tr`
  &:nth-of-type(n-1) {
    background-color: white;
  }

  &:nth-of-type(2n) {
    background-color: #ddd8e3;
  }
`;
