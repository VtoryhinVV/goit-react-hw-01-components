import styled from '@emotion/styled';

export const ItemFriendList = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  box-shadow: 8px 11px 23px -4px rgba(0, 0, 0, 0.52);
  background-color: white;
  border-radius: 5px;
`;

export const StatusSpan = styled.span`
  width: 20px;
  height: 20px;
  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
  border-radius: 100%;
`;

export const NameFriend = styled.p`
  font-size: 24px;
`;
