//Dependencias
import React, { Component } from 'react';

//Componentes
import Title from '../Global/Title';
import Busqueda from '../Global/Busqueda.js';
import Contenido from './Contenido.js';
import baseURL from '../../url';
import { Link } from "react-router-dom";
import { logPageView } from '../../analytics';
class Listado extends Component {
	constructor() {
		super()
		this.state = { data_a: [] , count: 1}
		 fetch(`${baseURL}/resources?page=${this.state.count}`)
			.then((response) => {
				return response.json()
			})
			.then((data) => {
			 this.setState({ data_a: data, count: 2})
			})
			this.handleCountClick = this.handleCountClick.bind(this);
			logPageView();
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

		fetch(`${baseURL}/resources?page=${this.state.count}`)
			.then((response) => {
				return response.json()
			})
			.then((data) => {
				this.setState({ data_a: data })
				console.log(this.state.count);
			})

			console.log(this.state.count);
	}
	
	tab(){
		window.open(`${baseURL}/resourcespdfs.pdf`,"pdf", "width =650, height=670, scrollbars=YES")
	}


	render(){
		return(
			<div>
				<Title title='Recursos'/>
				<div className="col-md-3 p0 padding-top-40">
					<div className="blog-asside-right pr0">
						<Busqueda />
						<Link to='/crearrecurso'><button type="submit" className="btn btn-default">Crear recurso</button></Link> 
						<button onClick ={this.tab} type="submit" className="btn btn-default">Ver recursos en pdf</button>
					</div>
				</div>
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