import PropTypes from 'prop-types';
import css from '../Transaction/TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => (
  <table className={css.table}>
    <thead className={css.head}>
      <tr>
        <th className={css.title}>Type</th>
        <th className={css.title}>Amount</th>
        <th className={css.title}>Currency</th>
      </tr>
    </thead>
    <tbody className={css.tableBody}>
      {items.map(item => (
        <tr key={item.id} className={css.tableRow}>
          <td className={css.typeCell}>{item.type}</td>
          <td className={css.itemCell}>{item.amount}</td>
          <td className={css.itemCell}>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
