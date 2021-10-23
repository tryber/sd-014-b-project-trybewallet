import React from 'react';
import PropTypes from 'prop-types';

export default class Column extends React.Component {
  render() {
    const { children, justifyContent, alignItems } = this.props;
    const justifyContentClass = justifyContent ? `justifyContent-${justifyContent}` : '';
    const alignItemsClass = alignItems ? `alignItems-${alignItems}` : '';
    const classes = `Column ${justifyContentClass} ${alignItemsClass}`;

    return (
      <div className={ classes }>
        { children }
      </div>
    );
  }
}

Column.propTypes = {
  children: PropTypes.node.isRequired,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
};

Column.defaultProps = {
  justifyContent: '',
  alignItems: '',
};
