// Dependencias
import React, { Component } from 'react';
import axios from 'axios';
import store from '../../store';
import baseURL from '../../url'
import swal from 'sweetalert2'
//Componentes
import Comentario from './Comentario.js';

class Comentarios extends Component {
	constructor(){
		super()
		this.state ={
			texto: "",
			errTexto:""
		}
	}
	enviarComentario=(e)=>{
		if(this.state.errTexto !== ''){
			swal('Reduce el contenido de tu comentario','', 'error');
		}else if(this.state.texto === ""){
			swal('Escribe un comentario','','warning')
		}
		else{

		
		let axiosConfig = {headers: {'Content-Type': 'application/json;'}};
          axios.post(`${baseURL}/comments`, {
         [this.props.type]: this.props.post_id,
         comment: this.state.texto,
         user_id: store.getState().id
      	 }, axiosConfig)
       	.then(function (response) {
      	 //  this.setState({response});
      	 swal("Su comentario ha sido creado",'','success');
      	  setTimeout(function(){document.location.reload()},1000);
        })
        .catch(function (error) {
        console.log(error);
       });
    }

	}
	valida(e){
		if((this.state.texto.length > 150) && (e.target.id ==='comment') ){
			this.setState({errTexto: 'El comentario debe ser menor a 150 caracteres'});
		}

	}
	actualizarTexto=(e)=>{
		this.setState({texto: e.target.value});
	}
	
	render(){
		if(localStorage.getItem('jwtToken')){

		if(this.props.listado === undefined){return(<div></div>)
		}else  {
		return(
			<div>	
			<h6 className="text wow fadeInLeft animated"><a>Comentarios</a></h6>
			{this.props.listado.map((comentario)=>{return(<Comentario type={this.props.type}avatar={comentario.image}key={comentario.id} name={comentario.user} date={comentario.date} comment = {comentario.comment} id={comentario.id} likes={comentario.likes} dislikes={comentario.dislikes} />)})}
				<section id="comment-form" className="add-comments">
					<div>
						<div className="row wow fadeInRight animated">
							<div className="col-sm-12">
								<div className="form-group">
									<label htmlFor="comment">Agrega un comentario &nbsp; <font color='red'>{this.state.errTexto}</font><span className="required"></span>
									</label>
									<textarea className="form-control" id="comment" value={this.state.texto} onChange={this.actualizarTexto} onInput={(e)=>this.valida(e)} rows={4} />
								</div>
							</div>
						</div>
						<div className="row wow fadeInRight animated">
							<div className="col-sm-12 text-right">
								<button className="btn btn-primary" onClick={this.enviarComentario}><i className="fa fa-comment-o" /> Comentar</button>
							</div>
						</div>
					</div>
				</section>
			</div>
				);
				}
		}else{
			if(this.props.listado === undefined){return(<div></div>)
		}else  {
		return(
				<div>
					<h6 className="text wow fadeInLeft animated"><a>Comentarios</a></h6>
		         	{this.props.listado.map((comentario)=>{return(<Comentario type={this.props.type}avatar={comentario.image}key={comentario.id} name={comentario.user} date={comentario.date} comment = {comentario.comment} id={comentario.id} likes={comentario.likes} dislikes={comentario.dislikes} />)})}
					</div>
				);}
			 }
}
}

export default Comentarios;
