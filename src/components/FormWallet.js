import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Input from './Input';
import SelectMoeda from './selects/SelectMoeda';
import SelectPay from './selects/SelectPay';
import SelectTag from './selects/SelectTag';
import Button from './Button';
import { fetchApi } from '../actions/index';

class FormWallet extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'meal',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    console.log(name, value);
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { fetchMoedas } = this.props;
    const { id } = this.state;
    this.setState({
      id: id + 1,
    });
    fetchMoedas(this.state);
    // curruncies();
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    console.log(method);
    return (
      <div>
        <Input
          label="Valor"
          id="valor-input"
          type="number"
          name="value"
          value={ value }
          onChange={ this.handleChange }
        />
        <Input
          label="Descrição"
          id="Descrição"
          type="text"
          name="description"
          value={ description }
          onChange={ this.handleChange }
        />
        <SelectMoeda name="currency" value={ currency } onChange={ this.handleChange } />
        <SelectPay name="method" value={ method } onChange={ this.handleChange } />
        <SelectTag name="tag" value={ tag } onChange={ this.handleChange } />
        <Button label="Adicionar despesa" onClick={ this.handleClick } />
      </div>
    );
  }
}

FormWallet.propTypes = {
  // curruncies: PropTypes.func.isRequired,
  fetchMoedas: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fetchMoedas: (expense) => dispatch(fetchApi(expense)),
  // curruncies: () => dispatch(fetchCurrencies()),
});

export default connect(null, mapDispatchToProps)(FormWallet);
