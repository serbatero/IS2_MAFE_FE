// Dependencias
import React, { Component} from "react";
import { Link } from "react-router-dom";
//Componentes
import Title from '../Global/Title';
import Grafico from '../Global/Grafico';
import Comentarios from '../Global/Comentarios.js';
import ListaRecursos from './ListaRecursos.js';
import DocenteMateria from './DocenteMateria.js';
//Assets
import baseURL from '../../url';
import { Doughnut} from 'react-chartjs-2';
import { logPageView } from '../../analytics';

class Individual extends Component {
constructor() {
		super()
		this.state = { data_a: [] }
		 logPageView();
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
		const doughnut = {
			labels: [
				'Dislikes',
				'Likes',
			],
			datasets: [
				{
					data: [this.state.data_a.dislikes, this.state.data_a.likes],
					backgroundColor: [
						'#cc0000',
						'#5cd65c',
					],
					hoverBackgroundColor: [
						'#cc0000',
						'#5cd65c',
					],
				}
			 ],
		};

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
										<Grafico valor="courses" type = "course_id"  data={this.state.data_a} />
										<div className="section">
											<section id="comments" className="comments wow fadeInRight animated"> 
												<h6 className="text wow fadeInLeft animated"><a>Description</a></h6>
												<div className="s-property-content">
													<p>{this.state.data_a.description}</p>
												</div>
												<Comentarios valor="courses"listado = {this.state.data_a.commentcourses} post_id={this.props.match.params.id} type = "course_id"/>
											</section>
										</div>
									</div>
								</div>
							</div>
							<DocenteMateria listado = {this.state.data_a.teacher_has_courses} />
							<div className="col-md-4 p0">
								<aside className="sidebar sidebar-property blog-asside-right">
									<div className="panel panel-default sidebar-menu similar-property-wdg wow fadeInRight animated">
										<div className="panel-heading">
											<h3 className="panel-title">Estadisticas</h3>
												</div>
											<div className="panel-body recent-property-widget">
												<Doughnut data={doughnut} />		
											</div>
									</div>
									<ListaRecursos listado = {this.state.data_a.course_has_resources}/>
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
