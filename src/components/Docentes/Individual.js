// Dependencias
import React, { Component} from "react";
import { Link } from "react-router-dom";
//Componentes
import Title from '../Global/Title';
import Comentarios from '../Global/Comentarios.js';
import ListaMaterias from './ListaMaterias.js';
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
		fetch(`${baseURL}/teachers/${this.props.match.params.id}`)
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
										<div className="section">
											<section id="comments" className="comments wow fadeInRight animated"> 
												<h6 className="text wow fadeInLeft animated"><a>Description</a></h6>
												<div className="s-property-content">
													<p>{this.state.data_a.description}</p>
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
														<a><img src={perfil} className="img-circle" alt=""/></a>
													</div>
													<div className="clear">
														<ul className="dealer-contacts">
															<li><i className="pe-7s-map-marker strong"> </i> 9089 your address </li>
															<li><i className="pe-7s-mail strong"> </i> email@yourcompany.com</li>
															<li><i className="pe-7s-call strong"> </i> +1 908 967 5906</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
									<ListaMaterias/>
								</aside>
							</div>
						</div>
						<Link to='/docentes'>Volver</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default Individual;