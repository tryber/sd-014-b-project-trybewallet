import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonAdd extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <section>
        <button
          type="button"
          onClick={ onClick }
        >
          Adicionar despesas

        </button>
      </section>
    );
  }
}

ButtonAdd.propTypes = {
  onclick: PropTypes.func,
}.isRequired;

export default ButtonAdd;
