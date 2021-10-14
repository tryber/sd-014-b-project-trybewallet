import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAPI } from '../actions';
import SelectGenerator from './SelectGenerator';

const payment = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const tag = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

function FormExpense(props) {
  const { handleAPI, currency } = props;
  useEffect(() => {
    handleAPI();
  }, []);

  return (
    <div>
      <form className="form-expense">
        <label className="form-label" htmlFor="value">
          Valor
          <input
            type="text"
            id="value"
            name="value"
            className="form-control"
          />
        </label>
        <SelectGenerator name="Moeda" option={ currency.filter((e) => e !== 'USDT') } />
        <SelectGenerator name="Método de pagamento" option={ payment } />
        <SelectGenerator name="Tag" option={ tag } />
        <label className="form-label" htmlFor="describe">
          Descrição
          <input
            type="text"
            name="describe"
            id="describe"
            className="form-control"
          />
        </label>
        <button type="button" className="btn btn-warning">Adicionar Despesa</button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  currency: Object.keys(state.wallet.currencies),
});

const mapDispatchToProps = (dispatch) => ({
  handleAPI: () => dispatch(fetchAPI()),
});

FormExpense.propTypes = {
  currency: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleAPI: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormExpense);
