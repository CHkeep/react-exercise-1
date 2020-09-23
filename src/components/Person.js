import React from 'react';
import url from '../assets/avatar.jpg';

class Person extends React.Component {
  render() {
    return (
      <div className="person">
        <img className="image-size" src={url} />
        <h1>HELLO,</h1>
        <br></br>
        <p>MY NAME IS KAMIL 24YO AND THIS IS MY RESUME/CV</p>
      </div>
    );
  }
}

export default Person;
