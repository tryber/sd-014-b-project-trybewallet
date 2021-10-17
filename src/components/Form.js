import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from './Input';
import MetdPagamento from './MetdPagamento';
import TiposDeGastos from './TiposDeGastos';
import SelectCoin from './SelectCoin';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      valor: '0',
      descricao: '',
      moeda: '',
      metdPagamento: '',
      tag: '',
      objetoApi: {},
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.fetchApi();
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  async fetchApi() {
    const fetchApi = await fetch('https://economia.awesomeapi.com.br/json/all');
    const jsonApi = await fetchApi.json();
    this.setState(() => ({
      objetoApi: jsonApi,
    }));
  }

  render() {
    const { valor, descricao, moeda, metdPagamento, tag, objetoApi } = this.state;
    return (
      <form>
        <Input
          htmlFor="valor"
          labelText="Valor"
          type="number"
          id="valor"
          name="valor"
          value={ valor }
          onChange={ this.handleChange }
        />
        <Input
          htmlFor="descricao"
          labelText="Descrição"
          type="text"
          id="descricao"
          name="descricao"
          value={ descricao }
          onChange={ this.handleChange }
        />
        <SelectCoin
          objFetch={ objetoApi }
          value={ moeda }
          onChange={ this.handleChange }
        />
        <MetdPagamento
          value={ metdPagamento }
          onChange={ this.handleChange }
        />
        <TiposDeGastos
          value={ tag }
          onChange={ this.handleChange }
        />
        <button type="button">Enviar</button>
      </form>
    );
  }
}

Form.propTypes = {

};

const mapStateToProps = () => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
