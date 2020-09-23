import React from 'react';
import PropTypes from 'prop-types';
import '../../App.scss';

class Eduction extends React.Component {
  propType = {
    year: PropTypes.number,
    title: PropTypes.string,
    content: PropTypes.string,
  };
  render() {
    return (
      <li>
        <span>{this.props.year}</span>
        <div className='content'>
          <strong>{this.props.title}</strong>
          <p>{this.props.content}</p>
        </div>
      </li>
    );
  }
}

export default Eduction;
