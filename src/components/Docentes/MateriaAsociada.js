// Dependencias
import React, { Component } from 'react';

//Assets
import materia from '../Global/images/book1.png';

class MateriaAsociada extends Component {
	render(){
		return(
		<div>
			<ul>
				<li>
					<div className="col-md-3 col-sm-3 col-xs-3 blg-thumb p0">
						<a><img src={materia} alt=""/></a>
						<span className="property-seeker">
							<b className="b-1">A</b>
							<b className="b-2">S</b>
						</span>
					</div>
					<div className="col-md-8 col-sm-8 col-xs-8 blg-entry">
						<h6> <a>{this.props.name}</a></h6>
						<span className="property-price">{this.props.score}</span>
					</div>
				</li>
			</ul>
		</div>
		);
	}
}

export default MateriaAsociada;
