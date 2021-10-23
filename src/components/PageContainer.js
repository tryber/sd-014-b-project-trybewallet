import React from 'react';
import PropTypes from 'prop-types';

export default class PageContainer extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="PageContainer">
        { children }
      </div>
    );
  }
}

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
