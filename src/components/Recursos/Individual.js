// Dependencias
import React, { Component} from "react";
import { Link } from "react-router-dom";
//Componentes
import Title from '../Global/Title';
import Comentarios from '../Global/Comentarios.js';
import ListaMaterias from './ListaMaterias.js';
import ListaDocentes from './ListaDocentes.js';
import FileBase64 from 'react-file-base64';
import axios from 'axios';
import store from '../../store';
import { Doughnut } from 'react-chartjs-2';
import Grafico from '../Global/Grafico';
//Assets
import baseURL from '../../url';
import { Document,Page } from 'react-pdf';
import { logPageView } from '../../analytics';
import swal from 'sweetalert2';
class Individual extends Component {

constructor() {
		super()
		this.state = { 
			nombre : '',
			nombreErr :'',
			datos: null,
			mensaje : '',
			mensajeErr: '',
			data_a: [],
			numPages: null,
			pageNumber: 1
			 }
		this.handleInput =this.handleInput.bind(this);
		this.validar = this.validar.bind(this);	
		logPageView();	 
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
	getFiles(files){
   this.setState({datos: files})
   console.log(this.state.datos);
  }
  handleInput(e){
		this.setState({
			[e.target.name]:e.target.value
		});
   
	};
	validar(e){
		if ((this.state.nombre.length <3 && this.state.nombre.length!==0)|| ((this.state.nombre === "")&&(e.target.name ==='nombre'))){
			this.setState({nombreErr: 'No es nombre valido'});
		}

		if(this.state.nombre.length >=3){
			this.setState({nombreErr: ''});
		}
	}
	onDocumentLoad = ({ numPages }) => {
	this.setState({ numPages });
  }

	ModificarRecurso=(e)=>{
		if(this.state.mensaje === '' || this.state.nombre === '' || this.state.datos === null){
			swal('Llene los campos señalados', '','error')
		}else{

		console.log(this.state);
		let axiosConfig = {
			 headers: {
		   'Content-Type': 'application/json;'
							}
						};

		axios.patch(`${baseURL}/tests/${this.state.data_a.id}`, {
			 resource: this.state.datos.base64,
			 name: this.state.nombre,
			 description: this.state.mensaje,
			 user_id:  store.getState().id
			 }, axiosConfig)
			 .then(function (response) {
		 
			 //console.log(response);
			 setTimeout(function(){document.location.reload()},1000);
			})
			.catch(function (error) {
			  console.log(error);
			 });
			swal('El recurso ha sido modificado', '', 'success')
		}

	}
	paginacion=(e)=>{
		
		if(e.target.id==="prev" && this.state.pageNumber >= 1 && this.state.pageNumber <=this.state.numPages ){
			this.setState({})
			this.setState({pageNumber: this.state.pageNumber - 1});
		}
		if(e.target.id==="next" && this.state.pageNumber >= 1 && this.state.pageNumber <=this.state.numPages )
			
		{
		this.setState({pageNumber: this.state.pageNumber + 1});
		}
		if(this.state.pageNumber===0){
			this.setState({pageNumber: 1})
		}
		if(this.state.pageNumber===this.state.numPages+1){
			this.setState({pageNumber: this.state.numPages})
		}
	}
	tab=()=>{
    window.open(this.state.data_a.link,"pdf", "width =650, height=670, scrollbars=YES")
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
	}],
};	
		if(localStorage.getItem('jwtToken')){
		 const { pageNumber, numPages } = this.state;
		
		return (
			<div >
			<Title title={this.state.data_a.name}/>
			<div className="content-area single-property" style={{backgroundColor: '#FCFCFC'}}>
					<div className="container">
						<div className="clearfix padding-top-40">
							<div className="col-md-8 single-property-content ">
								<div className="single-property-wrapper">
									
									<div className="single-property-header">
									<Grafico data={this.state.data_a} type="resource_id"/>
										 <a  onClick ={this.tab}><h3><b>Visualizar documento:</b></h3></a>

										<div className="section">
											<section id="comments" className="comments wow fadeInRight animated"> 
												<h6 className="text wow fadeInLeft animated"><a>Description</a></h6>
												<div className="s-property-content">
													<p>{this.state.data_a.description}</p>
												 <Document file={this.state.data_a.link} onLoadSuccess={this.onDocumentLoad}>
													 <Page pageNumber={pageNumber} />
															  </Document>
												  <p>Page {pageNumber} of {numPages}</p>
												  <button type="submit"id="prev" className="btn btn-primary" onClick ={this.paginacion}> Prev</button>
												  <button type="submit"id="next" className="btn btn-primary" onClick ={this.paginacion}> Next</button>
												</div>
												<Comentarios listado = {this.state.data_a.commentresources} post_id={this.props.match.params.id} type="resource_id" valor="resources"/>
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
													<div className="form-group">
														<label  color='red'>Nombre(s) &nbsp; <font color='red'> {this.state.nombreErr}</font></label>
														<input type="text" className="form-control" id="firstname" name ='nombre'value={this.state.nombre} onChange = {this.handleInput}onInput = {this.validar} onBlur = {this.validar}required/>                        
													</div>
													<div className="form-group">
														<label >Descripcion &nbsp; <font>{this.state.mensajeErr}</font></label>
														<textarea id="message" className="form-control" name='mensaje'value = {this.state.mensaje} onChange = {this.handleInput }></textarea>
													</div>
													<div className="form-group">
														<label >Archivo del recurso: </label>
													<FileBase64 className="form-control"
														multiple={ false }
						 								onDone={ this.getFiles.bind(this) } />
						 							</div>
													<div className="col-xs-4 col-sm-4 dealer-face">
														<button type="submit" className="btn btn-primary" onClick ={this.ModificarRecurso}>Modificar recurso</button>
													</div>													
												</div>
											</div>
										</div>
									</div>
								</aside>
							</div>
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
									<ListaDocentes listado = {this.state.data_a.teacher_has_resources}/>
									<ListaMaterias listado = {this.state.data_a.course_has_resources} />
									
								</aside>
							</div>
						</div>
						<Link to='/recursos'>Volver</Link>
					</div>
				</div>

			</div>
		);}else{
 const { pageNumber, numPages } = this.state;
			return(<div>
			<div >
			<Title title={this.state.data_a.name}/>
			<div className="content-area single-property" style={{backgroundColor: '#FCFCFC'}}>
					<div className="container">
						<div className="clearfix padding-top-40">
							<div className="col-md-8 single-property-content ">
								<div className="single-property-wrapper">
									
									<div className="single-property-header">
									<Grafico data={this.state.data_a} type="resource_id"/>
										 <a href={this.state.data_a.link}><h3><b>Visualizar documento:</b></h3></a>
										   
										<div className="section">
											<section id="comments" className="comments wow fadeInRight animated"> 
												<h6 className="text wow fadeInLeft animated"><a>Description</a></h6>
												<div className="s-property-content">
													<p>{this.state.data_a.description}</p>
												 <Document file={this.state.data_a.link} onLoadSuccess={this.onDocumentLoad}>
													 <Page pageNumber={pageNumber} />
															  </Document>
												  <p>Page {pageNumber} of {numPages}</p>
												  <button type="submit"id="prev" className="btn btn-primary" onClick ={this.paginacion}> Prev</button>
												  <button type="submit"id="next" className="btn btn-primary" onClick ={this.paginacion}> Next</button>
												</div>
												<Comentarios listado = {this.state.data_a.commentresources} post_id={this.props.match.params.id} type="resource_id" valor="resources"/>
											</section>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 p0">
								<aside className="sidebar sidebar-property blog-asside-right">
									<div className="panel panel-default sidebar-menu similar-property-wdg wow fadeInRight animated">
										<div className="panel-heading">
											<h3 className="panel-title">Estadisticas</h3>
										</div>
										<div className="panel-body recent-property-widget">
											<Doughnut data={doughnut} />
										</div>

										<ListaDocentes listado = {this.state.data_a.teacher_has_resources}/>
										<ListaMaterias listado = {this.state.data_a.course_has_resources}/>
									</div>
								</aside>
							</div>
						</div>
						<Link to='/recursos'>Volver</Link>
					</div>
				</div>
			</div>
		</div>)}
	}
}

export default Individual;