import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SelectCurrency extends React.Component {
  render() {
    const { moedas, id } = this.props;
    const indexUSDT = moedas.indexOf('USDT');
    const arrayIsValid = -1;
    if (indexUSDT > arrayIsValid) moedas.splice(indexUSDT, 1);
    return (
      <label htmlFor={ id }>
        Moeda:
        <select id={ id } name="currency">
          { moedas
            .map((coin, i) => (<option key={ i } value={ coin }>{ coin }</option>))}
        </select>
      </label>
    );
  }
}

SelectCurrency.propTypes = {
  moedas: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  moedas: state.wallet.currencies,
});

export default connect(mapStateToProps)(SelectCurrency);
