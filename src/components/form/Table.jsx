import React, { Component } from 'react';
import { connect } from 'react-redux';

class Table extends Component {
  logProps() {
    const { expenses } = this.props;
    const exp = expenses[0];
    const { description, tag, method, value, currency, id, exchangeRates } = exp;
    // o valor de currency será usado como key do objeto exchangeRates através do método bracket notation
    // Para a moeda terei que usar o exchangeRates passando o valor de currency como key com braket notation, dái dendtro do outro objeto pego a propriedade name
    // a informação de moeda de conversão também está no name, terei que pensar em uma forma de separar essa string... se não me engano tem uma função chamada slice que faz isso
    // acho que o câmbio ultilizado é o ask e o valor convertido é o value * ask
    // moeda de conversão é o real brasileiro sempre
    // editar/excluir é o id

    console.log(`currency ${currency}`);
    console.log(`value ${value}`);
    console.log(`exchangeRates ${exchangeRates[currency].ask}`);
    // const totalExpense = expenses.reduce(
    //   (acc, { currency, value, exchangeRates }) => acc + value * exchangeRates[currency].ask,
    //   0,
    // );
    // console.log(totalExpense);
  }

  render() {
    const tableHeader = [
      'Descrição',
      'Tag',
      'Método de Pagamento',
      'Valor',
      'Moeda',
      'Câmbio utilizado',
      'Valor convertido',
      'Moeda de conversão',
      'Editar/Excluir',
    ];
    const { expenses } = this.props;
    console.log(expenses[0]);
    return (
      <>
        <button type="button" onClick={ () => this.logProps() }>
          Teste
        </button>
        <table>

          <thead>
            <tr>
              {tableHeader.map((header, index) => (
                <th key={ index }>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* tenho que fazer um map para renderizar de uma vez só o conteúdo de toda a linha */}
            {/* Mas primeiro devo conseguir fazer isso com um linha só... */}
            {/* 1 Passo: Pegar o array */}
            {/* Fazer o map */}
            {/* para cada posição [0, 1] no array... fazer o que? */}

            {expenses && expenses.map((element) => {
              console.log(`currency ${element.id}`);
              console.log(`value ${element.value}`);
              console.log(`exchangeRates ${element.exchangeRates[element.currency].ask}`);
            })}
            <tr>
              <td>teste</td>
              <td>teste 2</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);

// <table> é o elemento pai de toda a tabela
// <thead> é o elemento pai do cabeçalho
// cada <tr> é uma linha
// cada <th> é um célula de cabeçalho
// <tbody> é o elemento pai de todas as outras linhas de conteúdo da tabela
// <td> é um célula individual simples
