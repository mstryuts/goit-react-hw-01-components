import PropTypes from 'prop-types';
import css from '../Friendlist/Friendlist.module.css';
import { Friend } from 'components/Friend/Friend';

export const Friendlist = ({ friends }) => (
  <>
    <ul className={css.friendList}>
      {friends.map(friend => (
        <Friend
          key={friend.id}
          avatar={friend.avatar}
          isOnline={friend.isOnline}
          name={friend.name}
        />
      ))}
    </ul>
  </>
);

Friendlist.propTypes = {
  friend: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
