// Dependencias
import React, { Component} from "react";
import { Link } from "react-router-dom";
//Componentes
import Title from '../Global/Title';
import Comentarios from '../Global/Comentarios.js';
import swal from 'sweetalert2'
import FileBase64 from 'react-file-base64';
import axios from 'axios'
//Assets
import baseURL from '../../url';

class Individual extends Component {
constructor() {
		super()
		this.state = { 
            nombre : '',
            nombreErr :'',
            datos: null,
            mensaje : '',
            mensajeErr: '',
            data_a: [] 
             }
              this.handleInput =this.handleInput.bind(this);
this.validar = this.validar.bind(this);		 
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
 //  console.log(this.state.datos);
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

	ModificarRecurso=(e)=>{

		console.log(this.state);
		let axiosConfig = {
     		 headers: {
       	   'Content-Type': 'application/json;'
      						}
   						};

		axios.patch(`${baseURL}/tests/${this.state.data_a.id}`, {
   			 resource: this.state.datos.base64,
         	 name: this.state.nombre,
             description: this.state.mensaje
 			 }, axiosConfig)
 			 .then(function (response) {
  		  window.location.replace("http://localhost:3001/recursos/");
   			 //console.log(response);
  			})
  			.catch(function (error) {
			  console.log(error);
 			 });

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
													<p>{this.state.data_a.description}</p>
												
												</div>
												<Comentarios/>
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
									
								</aside>
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