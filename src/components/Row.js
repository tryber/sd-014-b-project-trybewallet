import React from 'react';
import PropTypes from 'prop-types';

export default class Row extends React.Component {
  render() {
    const { children, justifyContent, alignItems } = this.props;
    const justifyContentClass = justifyContent ? `justifyContent-${justifyContent}` : '';
    const alignItemsClass = alignItems ? `alignItems-${justifyContent}` : '';
    const classes = `Row ${justifyContentClass} ${alignItemsClass}`;

    return (
      <div className={ classes }>
        { children }
      </div>
    );
  }
}

Row.propTypes = {
  children: PropTypes.node.isRequired,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
};

Row.defaultProps = {
  justifyContent: '',
  alignItems: '',
};
