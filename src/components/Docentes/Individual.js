import React, { Component} from "react";
import { Link } from "react-router-dom";
import baseURL from '../../url';
import Title from '../Global/Title';
class Individual extends Component {
constructor() {
    super()
    this.state = { data_a: [] }
     
  }
  componentWillMount(){
    fetch(`${baseURL}/teachers/${this.props.match.params.id}`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
       this.setState({ data_a: data})
      })
  }
  render() {  
   console.log(this.props.match.params.id)
   console.log(this.state.data_a)
    return (
      <div >
      <Title title='Docente'/>
      <h1>AQUI VAN LOS DATOS Y ESTILOS DEL DOCENTE</h1>
      <h1>{this.state.data_a.name}</h1>
      <h1>{this.state.data_a.description}</h1>
      <Link to='/docentes'>Volver</Link>
      </div>
    );
  }
}

export default Individual;