import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { tag } from '../actions';

class SelectTagDespesa extends React.Component {
  constructor() {
    super();
    this.state = {
      tagDespesa: 'alimentacao',
    };
    this.handleState = this.handleState.bind(this);
  }

  handleState({ target }) {
    const { id, value } = target;
    this.setState({ [id]: value }, () => {
      const { enviaValue } = this.props;
      enviaValue(value);
    });
  }

  render() {
    const { tagDespesa } = this.state;
    return (
      <label htmlFor="tagDespesa">
        Tag
        <select id="tagDespesa" onChange={ this.handleState } value={ tagDespesa }>
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }
}

SelectTagDespesa.propTypes = {
  enviaValue: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  enviaValue: (payload) => dispatch(tag(payload)),
});

export default connect(null, mapDispatchToProps)(SelectTagDespesa);
