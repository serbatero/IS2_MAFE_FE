// Dependencias
import React, { Component } from 'react';
import Recurso from './Recurso.js';

class Contenido extends Component {
	
	render(){
		
		return(
			<div className="col-md-9  pr0 padding-top-40 properties-page">
				<div className="col-md-12 clear"> 
					<div id="list-type" className="proerty-th">
						{this.props.listado.map((recurso)=>{
								return <Recurso key={recurso.id} name={recurso.name} scoreresource_id={recurso.scoreresource_id} link={recurso.link} />
							})
						}
					</div>
			</div>	
				<div className="col-md-12"> 
					<div className="pull-right">
						<div className="pagination">
								<ul>
									<li><a href="Prev">Prev</a></li>
									<li><a href="1">1</a></li>
									<li><a href="2">2</a></li>
									<li><a href="3">3</a></li>
									<li><a href="4">4</a></li>
									<li><a href="Next">Next</a></li>
								</ul>
						</div>
					</div>
				</div>	
			</div>							
		);
	}
}

export default Contenido;