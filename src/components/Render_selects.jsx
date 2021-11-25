import React from 'react';
import Select_component from './Select_component';
import PropTypes from 'prop-types';
import paymentsOptions, { tagsOptions } from '../helper/helper';
import { connect } from 'react-redux';

class Render_selects extends React.Component {
  render() {
    const { currency, handleChange, currenciesOptions, method, tag } = this.props;
    return (
      <> 
        <Select_component
          label="Moeda"
          value={ currency } 
          id="currency"
          name="currency"
          onChange={ handleChange }
          options={ currenciesOptions }
        />
        <Select_component
          label="Método de pagamento"
          value={ method } 
          id="method"
          name="method"
          onChange={ handleChange }
          options={ paymentsOptions }
        />
        <Select_component
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

Render_selects.propTypes = {
  currenciesOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  currency: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  method: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  currenciesOptions: state.wallet.currencies,
});


export default connect (mapStateToProps)(Render_selects) ;

