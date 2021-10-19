import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from './Input';
import Select from './Select';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      valueInput: '',
      coinInput: '',
      paymentInput: '',
      tagInput: '',
      describeInput: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { valueInput, coinInput, paymentInput, tagInput, describeInput } = this.state;
    const paymentArray = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tagArray = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const { coinsArray } = this.props;
    return (
      <form>
        <Input
          labelText="Valor:"
          id="valueInputId"
          name="valueInput"
          value={ valueInput }
          handleChange={ this.handleChange }
        />
        <Select
          labelText="Moeda:"
          id="coinInputId"
          name="coinInput"
          value={ coinInput }
          handleChange={ this.handleChange }
          options={ coinsArray }
        />
        <Select
          labelText="Método de pagamento:"
          id="paymentInputId"
          name="paymentInput"
          value={ paymentInput }
          handleChange={ this.handleChange }
          options={ paymentArray }
        />
        <Select
          labelText="Tag:"
          id="tagInputId"
          name="tagInput"
          value={ tagInput }
          handleChange={ this.handleChange }
          options={ tagArray }
        />
        <Input
          labelText="Descrição:"
          id="describeInputId"
          name="describeInput"
          value={ describeInput }
          handleChange={ this.handleChange }
        />
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  coinsArray: state.wallet.currencies,
});

Form.propTypes = {
  coinsArray: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps)(Form);
