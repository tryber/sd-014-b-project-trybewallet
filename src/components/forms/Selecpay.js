import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, connect } from 'react-redux';
import { setFormPayment } from '../../actions';

const Selecpay = ({ payment }) => {
  const dispatch = useDispatch();

  return (
    <label htmlFor="payment">
      Método de Pagamento
      <select
        name="payment"
        id="payment"
        value={ payment }
        onChange={ ({ target }) => dispatch(setFormPayment(target.value)) }
      >
        <option value="Dinheiro">Dinheiro</option>
        <option value="Cartão de crédito">Cartão de Crédito</option>
        <option value="Cartão de débito">Cartão de Débito</option>
      </select>
    </label>
  );
};

Selecpay.propTypes = {
  payment: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({ payment: state.form.payment });

export default connect(mapStateToProps)(Selecpay);
