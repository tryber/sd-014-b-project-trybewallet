// import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

// class Form extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       value: '',
//       id: 0,
//       description: '',
//       currency: 'USD',
//       method: 'Dinheiro',
//       tag: 'Alimentacao',
//       exchangeRates: {},
//     };
//     this.handleClick = this.handleClick.bind(this);
//     this.handleInputsForm = this.handleInputsForm.bind(this);
//   }

//   handleInputsForm({ target: { name, value } }) {
//     this.setState({ [name]: value });
//   }

//   async requestCoins() {
//     const response = await fetch('https://economia.awesomeapi.com.br/json/all');
//     const data = await response.json();
//     delete data.USDT;
//   }

//   async handleClick() {
//     const { saveExpenses, expenses } = this.props;
//     const returnApi = await this.requestCoins();
//     saveExpenses({ ...this.state, id: expenses.length, exchangeRates: returnApi });
//   }

//   render() {
//     return (
//       <form>
//         <label htmlFor="input-value">
//           <input
//             handleChange={ this.handleInputsForm }
//             type="text"
//             id="input-value"
//             name="value"
//           />
//         </label>
//         <label htmlFor="input-description">
//           <input
//             handleChange={ this.handleInputsForm }
//             type="text"
//             id="2"
//             name="description"
//             textLabel="Descrição"
//           />
//         </label>
//         <label htmlFor="select-currency">
//           Moeda
//           <select id="3" name="currency" handleChange={ this.handleInputsForm }>
//             <h1>a</h1>
//           </select>
//         </label>
//         <label htmlFor="input-method">
//           Método de pagamento
//           <select id="input-method" name="method" onChange={ this.handleInputsForm }>
//             <option value="Dinheiro">Dinheiro</option>
//             <option value="Cartão de crédito">Cartão de crédito</option>
//             <option value="Cartão de débito">Cartão de débito</option>
//           </select>
//         </label>
//         <label htmlFor="input-tag">
//           Tag
//           <select id="input-tag" name="tag" onChange={ this.handleInputsForm }>
//             <option value="Alimentação">Alimentação</option>
//             <option value="Lazer">Lazer</option>
//             <option value="Trabalho">Trabalho</option>
//             <option value="Transporte">Transporte</option>
//             <option value="Saude">Saúde</option>
//           </select>
//         </label>
//         <button type="submit" onClick={ this.handleClick }>Adicionar despesa</button>
//       </form>
//     );
//   }
// }

// Form.propTypes = {
//   coin: PropTypes.shape({
//     map: PropTypes.func,
//   }).isRequired,
//   saveExpenses: PropTypes.func.isRequired,
//   expenses: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
// };

// const mapStateToProps = (state) => ({
//   expenses: state.wallet.expenses,
// });

// const mapDispatchToProps = (dispatch) => ({
//   saveExpenses: (state) => dispatch(requestCoins(state)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Form);

import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="input-value">
          <input
            type="text"
            id="input-value"
            name="value"
          />
        </label>
        <label htmlFor="input-description">
          <input
            type="text"
            id="2"
            name="description"
            textLabel="Descrição"
          />
        </label>
        <label htmlFor="select-currency">
          Moeda
          <select id="3" name="currency">
            <h1>a</h1>
          </select>
        </label>
        <label htmlFor="input-method">
          Método de pagamento
          <select id="input-method" name="method">
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="input-tag">
          Tag
          <select id="input-tag" name="tag">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saude">Saúde</option>
          </select>
        </label>
        <button type="submit">Adicionar despesa</button>
      </form>
    );
  }
}

export default Form;
