import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class SelectCurrency extends React.Component {
  render() {
    const { moedas, id, handleChange, value } = this.props;
    return (
      <label htmlFor={ id }>
        Moeda:
        <select id={ id } value={ value } name="currency" onChange={ handleChange }>
          { moedas
            .filter((currency) => currency !== 'USDT')
            .map((coin, i) => (<option key={ i } value={ coin }>{ coin }</option>))}
        </select>
      </label>
    );
  }
}

SelectCurrency.propTypes = {
  moedas: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  moedas: state.wallet.currencies,
});

export default connect(mapStateToProps)(SelectCurrency);
