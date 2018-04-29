// Dependencias
import React, { Component } from 'react';
//Componentes
import Comentario from './Comentario.js';

class Comentarios extends Component {
	
	render(){
		return(
			<div>	
				<h6 className="text wow fadeInLeft animated"><a>Comentarios</a></h6>
				{this.props.listado.map((comentario)=>{
								return (
								<Comentario key={comentario.id} name={comentario.user} date={comentario.date} comment = {comentario.comment} id={comentario.id} likes={comentario.likes} dislikes={comentario.dislikes} />
								)
							})
				}

				<section id="comment-form" className="add-comments">
					<form>
						<div className="row wow fadeInRight animated">
							<div className="col-sm-12">
								<div className="form-group">
									<label htmlFor="comment">Agrega un comentario <span className="required"></span>
									</label>
									<textarea className="form-control" id="comment" rows={4} defaultValue={""} />
								</div>
							</div>
						</div>
						<div className="row wow fadeInRight animated">
							<div className="col-sm-12 text-right">
								<button className="btn btn-primary"><i className="fa fa-comment-o" /> Comentar</button>
							</div>
						</div>
					</form>
				</section>
			</div>
		);
	}
}

export default Comentarios;
