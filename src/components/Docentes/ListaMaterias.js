// Dependencias
import React, { Component } from 'react';
//Componentes
import MateriaAsociada from './MateriaAsociada.js';

class ListaMaterias extends Component {
	render(){
		return(
			<div className="panel panel-default sidebar-menu similar-property-wdg wow fadeInRight animated">
				<div className="panel-heading">
					<h3 className="panel-title">Materias Asocidos</h3>
				</div>
				<div className="panel-body recent-property-widget">
					<MateriaAsociada name={"Materia"} score={"Puntaje"}/>
				</div>
			</div>
		);
	}
}

export default ListaMaterias;
