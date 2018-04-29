// Dependencias
import React, { Component} from "react";
import { Link } from "react-router-dom";
//Componentes
import Title from '../Global/Title';
import Comentarios from '../Global/Comentarios.js';

//Assets
import baseURL from '../../url';
import comentarios from './comentarios.js';

class Individual extends Component {
constructor() {
		super()
		this.state = { data_a: [] }
		 
	}
	componentWillMount(){
		fetch(`${baseURL}/resources/${this.props.match.params.id}`)
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
										<h3><b>Link: {this.state.data_a.link}</b></h3>
										<div className="section">
											<section id="comments" className="comments wow fadeInRight animated"> 
												<h6 className="text wow fadeInLeft animated"><a>Description</a></h6>
												<div className="s-property-content">
													<p>Nulla quis dapibus nisl. Suspendisse ultricies Nulla quis dapibus nisl. Suspendisse ultricies commodo arcu nec pretium. Nullam sed arcu ultricies commodo arcu nec pretium. Nullam sed arcu ultricies Nulla quis dapibus nisl. Suspendisse ultricies commodo arcu nec pretium. Nullam sed arcu ultricies Nulla quis dapibus nisl. Suspendisse ultricies commodo arcu nec pretium. Nullam sed arcu ultricies                              </p>
												</div>
												<Comentarios listado = {comentarios} />
											</section>
										</div>
									</div>
								</div>
							</div>
						</div>
						<Link to='/recursos'>Volver</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default Individual;