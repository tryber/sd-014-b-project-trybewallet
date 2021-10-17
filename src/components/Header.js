import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      despesaTotal: 0,
    };
  }

  render() {
    const { email } = this.props;
    const { despesaTotal } = this.state;
    console.log(email);
    return (
      <div>
        <h1>HEADER</h1>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">{ despesaTotal }</p>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
