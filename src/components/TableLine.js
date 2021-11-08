import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EraseBtn from './EraseBtn';

const TableLine = ({ expenses }) => {
  const [spends, setSpends] = useState([]);

  useEffect(() => {
    setSpends(expenses);
  }, [expenses]);

  return (
    <>
      {
        spends.map((spend, index) => {
          const {
            description,
            tag,
            method,
            value,
            exchangeRates,
            currency,
          } = spend;

          const roundedAsk = Math.round(exchangeRates[currency].ask * 100) / 100;
          const roundedConverted = Math
            .round((exchangeRates[currency].ask * value) * 100) / 100;

          return (
            <tr key={ index }>
              <td>{description}</td>
              <td>{tag}</td>
              <td>{method}</td>
              <td>{value}</td>
              <td>{exchangeRates[currency].name}</td>
              <td>{roundedAsk}</td>
              <td>{ roundedConverted }</td>
              <td>Real</td>
              <td>
                <button type="button">Editar</button>
                <EraseBtn spend={ spend } />
              </td>
            </tr>
          );
        })
      }
    </>
  );
};

TableLine.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({ expenses: state.wallet.expenses });

export default connect(mapStateToProps)(TableLine);
