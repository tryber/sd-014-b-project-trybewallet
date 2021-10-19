import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class List extends Component {
  render() {
    const { expenses } = this.props;
    return (
      expenses.map((element, index) => (
        <div id={ index } key={ index }>
          {`${element.value} 
        ${element.describe} 
        ${element.method}
        ${element.currency}
        ${element.tag}`}
        </div>
      ))
    );
  }
}

List.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  mail: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(List);
