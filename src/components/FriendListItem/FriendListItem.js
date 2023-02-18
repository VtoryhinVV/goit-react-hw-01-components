import PropTypes from 'prop-types';

import {
  ItemFriendList,
  StatusSpan,
  NameFriend,
} from './FriendListItem.styled';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <ItemFriendList>
      <StatusSpan isOnline={isOnline}></StatusSpan>
      <img src={avatar} alt="User avatar" width="48" />
      <NameFriend>{name}</NameFriend>
    </ItemFriendList>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool.isRequired,
};
