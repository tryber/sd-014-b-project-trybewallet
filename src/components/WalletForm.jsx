import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputLabel from './InputLabel';
import SelectLabel from './SelectLabel';
import DATA from '../data';

export default class WalletForm extends Component {
  render() {
    const { props, state, onEntries, onSubmit } = this.props;
    const { hasCurrencies, currencies } = props;
    const { value, description, currency, method, tag } = state;
    return (
      <form className="wallet-form">
        <InputLabel
          id="value"
          value={ value }
          name="Valor"
          callbackFunc={ onEntries }
        />
        <SelectLabel
          id="currency"
          value={ currency }
          name="Moeda"
          callbackFunc={ onEntries }
          isLoaded={ hasCurrencies }
          ITEMS={ currencies }
        />
        <SelectLabel
          id="method"
          value={ method }
          name="Método de pagamento"
          callbackFunc={ onEntries }
          ITEMS={ DATA.payment }
        />
        <SelectLabel
          id="tag"
          value={ tag }
          name="Tag"
          callbackFunc={ onEntries }
          ITEMS={ DATA.tag }
        />
        <InputLabel
          id="description"
          value={ description }
          name="Descrição"
          callbackFunc={ onEntries }
        />
        <button
          type="button"
          onClick={ onSubmit }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

WalletForm.propTypes = {
  props: PropTypes.objectOf(PropTypes.any).isRequired,
  state: PropTypes.objectOf(PropTypes.any).isRequired,
  onEntries: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
