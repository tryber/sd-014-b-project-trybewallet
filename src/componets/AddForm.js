import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import InputValue from './InputValue';
import InputSelect from './InputSelect';

class AddForm extends React.Component {
  handlerSubmit() {

  }

  render() {
    const { currencies } = this.props;
    return (
      <div>
        <form>
          <InputValue label="Valor" type="number" name="Valor" />
          <InputSelect
            label="Moeda"
            name="Moeda"
            data={ currencies.filter((cur) => cur !== 'USDT') }
          />
          <InputSelect
            label="Método de pagamento"
            data={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
          />
          <InputSelect
            label="Tag"
            name="Tag"
            data={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
          />
          <InputValue
            label="Descrição"
            name="Descricao"
            type="text"
          />
          <button type="button" onClick="">Adicionar despesa</button>
        </form>
      </div>
    );
  }
}

AddForm.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(AddForm);
