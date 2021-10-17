import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      valor: 0,
      descricao: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { valor, descricao } = this.state;
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input
            type="number"
            id="valor"
            name="valor"
            value={ valor }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="descricao">
          Descrição:
          <input
            type="text"
            id="descricao"
            name="descricao"
            value={ descricao }
            onChange={ this.handleChange }
          />
        </label>

        <button type="button">Enviar</button>

      </form>
    );
  }
}

Form.propTypes = {

};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Form)
