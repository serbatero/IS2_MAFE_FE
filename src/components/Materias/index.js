// Dependencies
import React, { Component } from 'react';
import Title from '../Global/Title';
class Materias extends Component {
  constructor(props) {
    super(props)
    this.state = { data_a: [] }
    
  }
 
 componentWillMount() {
    fetch('http://localhost:3000/courses')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState({ data_a: data })
        console.log(data)
      })
  }
  render() {
    return (
     <div>
     <Title title='Materias'/>
     </div>
    );
  }
}

export default Materias;
