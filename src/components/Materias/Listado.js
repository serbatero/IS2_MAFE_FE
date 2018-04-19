// Dependencias
import React, { Component } from 'react';

//Componentes
import Title from '../Global/Title';
import Busqueda from '../Global/Busqueda.js';
import Contenido from './Contenido.js';
import baseURL from '../../url';

class Listado extends Component {
	constructor() {
    super()
    this.state = { data_a: [] , count: 1}
     fetch(`${baseURL}/courses?page=${this.state.count}`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
       this.setState({ data_a: data, count:2})
      })
      this.handleCountClick = this.handleCountClick.bind(this);
  }
 
  handleCountClick(e) {
    if (e.target.id === 'add') {
      this.setState({
        count: this.state.count + 1
      });
    } else if (e.target.id === 'subtract' && this.state.count > 1) {
      this.setState({
        count: this.state.count - 1
      });
    } else {
      this.setState({
        count: 1
      });
    }
    
    fetch(`${baseURL}/courses?page=${this.state.count}`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState({ data_a: data })
        console.log(this.state.count);
      })
     
      console.log(this.state.count);
  }

	render(){
		return(
			<div>
				<Title title="Materias"/>
				<Busqueda />
				<Contenido listado={this.state.data_a}/>
				<div className="col-md-12"> 
					<div className="pull-right">
						<div className="pagination">
								<ul>
									<button type="submit" id = "subtract"onClick={this.handleCountClick} className="btn btn-default">Prev</button>
									<button type="submit" className="btn btn-default">{this.state.count-1}</button>
									<button type="submit" id = "add"onClick={this.handleCountClick} className="btn btn-default">Next</button>
								</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Listado;
