import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      expenses: 0,
      currency: 'BRL',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { user } = this.props;
    const { expenses, currency } = this.state;
    return (
      <header>
        <form>
          <label htmlFor="infos">
            Usuario:
            <span data-testid="email-field">{user}</span>
            <div data-testid="total-field">
              Dispesas:
              <span>{ expenses }</span>
              Moeda:
              <span data-testid="header-currency-field">{ currency }</span>
            </div>
          </label>
        </form>
      </header>
    );
  }
}

Header.propTypes = {
  user: PropTypes.objectOf(String).isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user.email,
});

export default connect(mapStateToProps)(Header);
