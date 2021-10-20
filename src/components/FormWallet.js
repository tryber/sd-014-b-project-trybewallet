import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Input from './Input';
import SelectMoeda from './selects/SelectMoeda';
import SelectPay from './selects/SelectPay';
import SelectTag from './selects/SelectTag';
import Button from './Button';
import { addForm } from '../actions';
import { fetchApi } from '../actions/actionAcync';

class FormWallet extends React.Component {
  constructor() {
    super();
    this.state = {
      // id: '',
      value: '',
      description: '',
      currency: 'USD',
      method: 'money',
      tag: 'meal',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { fetchMoedas } = this.props;
    // const dados = fetchMoedas();
    // this.setState({
    //   exchangeRates: dados,
    // });
    fetchMoedas(this.state);
    // formToRedux(this.state);
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
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
  formToRedux: PropTypes.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  formToRedux: (info) => dispatch(addForm(info)),
  fetchMoedas: (expense) => dispatch(fetchApi(expense)),
});

export default connect(null, mapDispatchToProps)(FormWallet);
