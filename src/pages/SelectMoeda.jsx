import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { moeda } from '../actions';

class SelectMoeda extends React.Component {
  constructor() {
    super();
    this.state = {
      moedaHtmlFor: 'USD',
      arrayMoedas: [],
    };
    this.handleState = this.handleState.bind(this);
  }

  componentDidMount() {
    this.callAPI();
  }

  callAPI() {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((r) => r.json())
      .then((r) => {
        const results = Object.values(r);
        return this.eliminaDolarTurismo(results);
      })
      .then((r) => this.setState({ arrayMoedas: [...r] }))
      .catch((error) => console.error(error));
  }

  eliminaDolarTurismo(array) {
    const findObject = array.find((element) => element.codein === 'BRLT');
    const arrayIndex = array.indexOf(findObject);
    return array.splice(arrayIndex);
  }

  handleState({ target }) {
    const { id, value } = target;
    this.setState({ [id]: value }, () => {
      const { enviaValue } = this.props;
      enviaValue(value);
    });
  }

  render() {
    const { moedaHtmlFor, arrayMoedas } = this.state;
    return (
      <label htmlFor="moedaHtmlFor">
        Moeda
        <select id="moedaHtmlFor" onChange={ this.handleState } value={ moedaHtmlFor }>
          { arrayMoedas.map((element, index) => (
            <option
              key={ index }
              value={ element.code }
            >
              { element.code }
            </option>))}
        </select>
      </label>
    );
  }
}

SelectMoeda.propTypes = {
  enviaValue: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  enviaValue: (payload) => dispatch(moeda(payload)),
});

export default connect(null, mapDispatchToProps)(SelectMoeda);
