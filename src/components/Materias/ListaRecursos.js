// Dependencias
import React, { Component } from 'react';
//Componentes
import RecursoAsociado from './RecursoAsosiado.js';

class ListaRecursos extends Component {
	render(){
		return(
			<div className="panel panel-default sidebar-menu similar-property-wdg wow fadeInRight animated">
				<div className="panel-heading">
					<h3 className="panel-title">Recursos Asocidos</h3>
				</div>
				<div className="panel-body recent-property-widget">
					<RecursoAsociado name={"Documento PDF"} score={"Puntaje"}/>
				</div>
			</div>
		);
	}
}

export default ListaRecursos;
