import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TableHeader from './tableHeader';

class TableWallet extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick({ target }) {
    console.log(target);
  }

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <TableHeader />
        <tbody>
          {expenses.map((result) => {
            const {
              id,
              description,
              tag,
              method,
              value,
              currency,
              exchangeRates,
            } = result;
            return (
              <tr key={ id }>
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>{value}</td>
                <td>{exchangeRates[currency].name}</td>
                <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
                <td>{value * Number(exchangeRates[currency].ask)}</td>
                <td>Real</td>
                <td>
                  {/*                  <button
                      type="button"
                      id={ id }
                      onClick={ (event) => this.handleClick(event) }
                      data-testid="delete-btn"
                    >
                      Deletar
                    </button> */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

TableWallet.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({ expenses: state.wallet.expenses });

export default connect(mapStateToProps, null)(TableWallet);
