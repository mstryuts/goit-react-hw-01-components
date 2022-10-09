import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';
import randomHex from './randomHex';

export const Statistics = ({ title, stats }) => (
  <section className={css.statistics}>
    {title ? <h2 className={css.title}>{title}</h2> : null}
    <ul className={css.statlist}>
      {stats.map(item => (
        <li
          style={{
            backgroundColor: randomHex(),
          }}
          key={item.id}
          className={css.statitem}
        >
          <span className={css.label}>{item.label}</span>
          <span className={css.percentage}>{item.percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
