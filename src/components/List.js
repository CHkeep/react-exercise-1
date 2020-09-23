import React from 'react';
import PropTypes from 'prop-types';

class List extends React.Component {
  propType = {
    name: PropTypes.string,
  };
  render() {   
    return (
      <h2 style={{ color: 'red', marginBottom:'20px',marginTop:'20px' }}>
        {this.props.name}
      </h2>
    );
  }
}
export default List;
