import PropTypes from 'prop-types';

import {
  TableTransaction,
  Thead,
  CaptionTransaction,
  TdTransaction,
  Tr,
} from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <TableTransaction>
      <Thead>
        <tr>
          <CaptionTransaction>Type</CaptionTransaction>
          <CaptionTransaction>Amount</CaptionTransaction>
          <CaptionTransaction>Currency</CaptionTransaction>
        </tr>
      </Thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <Tr key={id}>
            <TdTransaction>{type}</TdTransaction>
            <TdTransaction>{amount}</TdTransaction>
            <TdTransaction>{currency}</TdTransaction>
          </Tr>
        ))}
      </tbody>
    </TableTransaction>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string,
    })
  ),
};
