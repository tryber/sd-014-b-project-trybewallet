import React from 'react';
import Select from './Select';
import PropTypes from 'prop-types';
import paymentsOptions, { tagsOptions } from '../helper/helper';
import { connect } from 'react-redux';

class RenderSelects extends React.Component {
  render() {
    const { currency, handleChange, currenciesOptions, method, tag } = this.props;
    return (
      <> 
        <Select
          label="Moeda"
          value={ currency } 
          id="currency"
          name="currency"
          onChange={ handleChange }
          options={ currenciesOptions }
        />
        <Select
          label="Método de pagamento"
          value={ method } 
          id="method"
          name="method"
          onChange={ handleChange }
          options={ paymentsOptions }
        />
        <Select
          label="Tag"
          value={ tag } 
          id="tag"
          name="tag"
          onChange={ handleChange }
          options={ tagsOptions }
        />
      </>
    );
  }
}

RenderSelects.propTypes = {
  currenciesOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  currency: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  method: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  currenciesOptions: state.wallet.currencies,
});


export default connect (mapStateToProps)(RenderSelects) ;

