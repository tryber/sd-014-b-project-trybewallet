import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class PaymentMethodForm extends React.Component {
  render() {
    const { onChange, value, name } = this.props;
    return (
      <label htmlFor="paymentMethod-form-label">
        Método de pagamento
        <select
          id="paymentMethod-form-label"
          onChange={ onChange }
          value={ value }
          name={ name }
        >
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

PaymentMethodForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(PaymentMethodForm);
