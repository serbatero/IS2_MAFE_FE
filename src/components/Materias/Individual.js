// Dependencias
import React, { Component} from "react";
import { Link } from "react-router-dom";
//Componentes
import Title from '../Global/Title';
import Comentarios from '../Global/Comentarios.js';
import ListaRecursos from './ListaRecursos.js';

//Assets
import baseURL from '../../url';
import perfil from '../Global/images/perfil.png';
import comentarios from './comentarios.js';

class Individual extends Component {
	constructor() {
		super()
		this.state = { data_a: [] }
		 
	}
	
	componentWillMount(){
		fetch(`${baseURL}/courses/${this.props.match.params.id}`)
			.then((response) => {
				return response.json()
			})
			.then((data) => {
			 this.setState({ data_a: data})
			})
	}
	
	render() {
		return (
			<div >
				<Title title={this.state.data_a.name}/>
				<div className="content-area single-property" style={{backgroundColor: '#FCFCFC'}}>
					<div className="container">
						<div className="clearfix padding-top-40">
							<div className="col-md-8 single-property-content ">
								<div className="single-property-wrapper">
									<div className="single-property-header">
										<h3><b>Codigo: {this.state.data_a.code}</b></h3>
										<div className="section">
											<section id="comments" className="comments wow fadeInRight animated"> 
												<h6 className="text wow fadeInLeft animated"><a>Descripcion</a></h6>
												<div className="s-property-content">
													<p>Nulla quis dapibus nisl. Suspendisse ultricies Nulla quis dapibus nisl. Suspendisse ultricies commodo arcu nec pretium. Nullam sed arcu ultricies commodo arcu nec pretium. Nullam sed arcu ultricies Nulla quis dapibus nisl. Suspendisse ultricies commodo arcu nec pretium. Nullam sed arcu ultricies Nulla quis dapibus nisl. Suspendisse ultricies commodo arcu nec pretium. Nullam sed arcu ultricies                              </p>
												</div>
												<Comentarios listado = {comentarios} />
											</section>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 p0">
								<aside className="sidebar sidebar-property blog-asside-right">
									<div className="dealer-widget">
										<div className="dealer-content">
											<div className="inner-wrapper">
												<div className="clear">
													<div className="col-xs-4 col-sm-4 dealer-face">
														<a>
															<img src={perfil} className="img-circle" alt=""/>
														</a>
													</div>
													<div className="col-xs-8 col-sm-8 ">
														<h3 className="dealer-name"><a>Nombre</a></h3>
														<span>Docente</span>
													</div>
												</div>
											</div>
											<div className="clear">
												<ul className="dealer-contacts">
													<li><i className="pe-7s-map-marker strong"> </i> 9089 your address </li>
													<li><i className="pe-7s-mail strong"> </i> email@yourcompany.com</li>
													<li><i className="pe-7s-call strong"> </i> +1 908 967 5906</li>
												</ul>
												<p>Duis mollis  blandit tempus porttitor curabiturDuis mollis  blandit tempus porttitor curabitur , est non…</p>
											</div>
										</div>
									</div>
									<ListaRecursos/>
								</aside>
							</div>
						</div>
						<Link to='/materias'>Volver</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default Individual;
