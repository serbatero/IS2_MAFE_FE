// Dependencias
import React, { Component } from 'react';

//Assets
import perfil from '../Global/images/perfil.png';


class Comentario extends Component {
	
	render(){
		return(

			<div className="row comment">
					<div className="col-sm-3 col-md-2 text-center-xs">
						<p>
							<img src={perfil} className="img-responsive img-circle" alt="" />
						</p>
					</div>
					<div className="col-sm-9 col-md-10">
						<h6 className="text-uppercase"><a>{this.props.name}</a></h6>
						<p className="posted"><i className="fa fa-clock-o" />{this.props.date}</p>
						<p>{this.props.comment}</p>
					</div>
				</div>
		
		);
	}
}

export default Comentario;
