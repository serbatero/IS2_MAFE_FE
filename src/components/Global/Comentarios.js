// Dependencias
import React, { Component } from 'react';
//Componentes
import Comentario from './Comentario.js';

class Comentarios extends Component {
	
	render(){
		return(
			<div>	
				<h6 className="text wow fadeInLeft animated"><a>Comments</a></h6>
				<Comentario name={"Julie Alma"} date={"September 23, 2012 at 12:00 am"} comment={"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."}/>
				<Comentario name={"Louise Armero"} date={"September 23, 2012 at 12:00 am"} comment={"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."}/>
			</div>
		);
	}
}

export default Comentarios;
