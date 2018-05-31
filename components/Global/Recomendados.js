// Dependencies
import React, { Component } from 'react';
import Recomendado from './Recomendado.js';

class Recomendados extends Component {
	
	render(){
		if(this.props.listado === undefined){return(<div></div>)}
		else{
			return(
				<div className="col-md-3 col-sm-6 wow fadeInRight animated">
					<div className="single-footer">
						<h4>Mejor votados</h4>
						<div className="footer-title-line" />
							<ul className="footer-blog">
								{this.props.listado.map((recomendado)=>{
										return (
										<Recomendado key={recomendado.id} name={recomendado.name} id = {recomendado.id} link = {recomendado.link} likes = {recomendado.likes} date = {recomendado.created_at.substring(0,10)}  />
										)
									})
								}					
							</ul>
					</div>
				</div>
			);
		}
	}
}

export default Recomendados;
