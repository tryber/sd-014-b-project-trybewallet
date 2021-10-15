import React from 'react';
import { connect } from 'react-redux';

class PaymentMethodForm extends React.Component {
  render() {
    return (
      <label htmlFor="paymentMethod-form-label">
        Método de pagamento
        <select id="paymentMethod-form-label">
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de Crédito">Cartão de Crédito</option>
          <option value="Cartão de Débito">Cartão de Débito</option>
        </select>
      </label>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(PaymentMethodForm);
