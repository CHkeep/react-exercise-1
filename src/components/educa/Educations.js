import React from 'react';
import Education from './Education';


class Educations extends React.Component {
  state = {
    educations: [
      {
        year: 1990,
        title: 'I was born in Katowice',
        content:
          'ILorem ipsum dolor sit amet, Lorem ips. born in Katowice'
      },
      {
        year: 2005,
        title: 'Secondary school specializing in article',
        content:
          'Eso,explicabo I wasLorem ipsum dolor sit amet, Lorem ips. born in Katowice'
      },
      {
        year: 2009,
        title: 'First level graducation in Graphic Design',
        content:
          'Aspennatur, wasLorem ipsum dolor sit amet, Lorem ips. born in Katowice'
      },
      {
        year: 2012,
        title: 'Second level graducation in Graphic Design',
        content:
          'Ducimus,aliquam tempore autem itaque et accusantinm!'
      }
    ],
  };

  render() {
    return (
      <ul className="educations">
        {this.state.educations.map(education =>
          <Education year={education.year} title = {education.title}  content={education.content} key={education}/>)}
      </ul>
    );
  }
}

export default Educations;
