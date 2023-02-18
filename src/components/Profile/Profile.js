import PropTypes from 'prop-types';

import {
  ProfileCard,
  Description,
  Avatar,
  TextName,
  TextInfo,
  Stats,
  StatsElem,
  Quantity,
} from './Profile.styled';

export default function Profile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <ProfileCard>
      <Description>
        <Avatar src={avatar} alt="User avatar" width="100" />
        <TextName>{username}</TextName>
        <TextInfo>{tag}</TextInfo>
        <TextInfo>{location}</TextInfo>
      </Description>

      <Stats>
        <StatsElem>
          <TextInfo>Followers</TextInfo>
          <Quantity>{followers}</Quantity>
        </StatsElem>
        <StatsElem>
          <TextInfo>Views</TextInfo>
          <Quantity>{views}</Quantity>
        </StatsElem>
        <StatsElem>
          <TextInfo>Likes</TextInfo>
          <Quantity>{likes}</Quantity>
        </StatsElem>
      </Stats>
    </ProfileCard>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
