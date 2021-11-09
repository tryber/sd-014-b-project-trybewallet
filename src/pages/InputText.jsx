import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { typeText } from '../actions';

class InputText extends React.Component {
  constructor() {
    super();
    this.handleState = this.handleState.bind(this);
  }

  handleState({ target }) {
    const { id, value } = target;
    this.setState({ [id]: value }, () => {
      const { enviaValue, labelName } = this.props;
      enviaValue(labelName, value);
    });
  }

  render() {
    const { labelName } = this.props;
    return (
      <label htmlFor={ labelName }>
        { labelName }
        <input id={ labelName } onChange={ this.handleState } type="text" />
      </label>
    );
  }
}

InputText.propTypes = {
  labelName: PropTypes.string.isRequired,
  enviaValue: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  enviaValue: (type, payload) => dispatch(typeText(type, payload)),
});

export default connect(null, mapDispatchToProps)(InputText);
