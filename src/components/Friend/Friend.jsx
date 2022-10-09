import PropTypes from 'prop-types';
import css from '../Friend/Friend.module.css';
import { SiStatuspage } from 'react-icons/si';

export const Friend = ({ avatar, name, isOnline }) => (
  <li className={css.item}>
    <span className={css.status}>
      {isOnline ? (
        <SiStatuspage style={{ color: 'green' }} />
      ) : (
        <SiStatuspage style={{ color: 'red' }} />
      )}
    </span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="58" />
    <p className={css.name}>{name}</p>
  </li>
);

Friend.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
