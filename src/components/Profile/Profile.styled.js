import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  width: 30%;
  padding-top: 30px;

  background-color: white;

  border-radius: 10px;
  box-shadow: 8px 11px 23px -4px rgba(0, 0, 0, 0.52);
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  padding-bottom: 10px;
`;

export const Avatar = styled.img`
  border-radius: 100%;
  margin-bottom: 10px;
`;

export const TextName = styled.p`
  font-size: 24px;
  font-weight: 600;
`;

export const TextInfo = styled.p`
  color: grey;
  font-size: 14px;
`;

export const Stats = styled.span`
  margin: 0;
  padding: 0;
  list-style-type: none;

  display: flex;

  justify-content: center;

  background-color: #e2e2e2;
  border-radius: 0 0 10px 10px;
`;

export const StatsElem = styled.span`
  display: flex;
  flex-direction: column;
  text-align: center;

  width: 30%;
  padding: 10px;

  border: 1px solid #76777c;
  &:nth-of-type(1) {
    border-radius: 0 0 0 10px;
  }

  &:nth-of-type(3) {
    border-radius: 0 0 10px;
  }
`;

export const Label = styled.span`
  color: grey;
  font-size: 14px;
`;

export const Quantity = styled.span`
  font-size: 16px;
  font-weight: 600;
`;
