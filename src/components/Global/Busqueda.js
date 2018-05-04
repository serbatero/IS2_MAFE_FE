import React, { Component } from 'react';
import axios from 'axios';
import baseURL from '../../url';
import swal from 'sweetalert2';
class Busqueda extends Component {
	constructor() {
    super()
    this.state = {  value: "teacher", texto: ""}
    
  }

  cambiarEstado=(e)=>{
  	
      if(e.target.id==="basic"){
      this.setState({value: e.target.value});
      }

      if(e.target.id==="texto"){
        console.log(e.target.value)
      this.setState({texto: e.target.value});
      }
  }
  realizarBusqueda=(e)=>{
   // console.log(this.state)
    var ruta = "";
    if(this.state.value==="teacher")
      ruta = "docentes";
    if(this.state.value==="resource")
      ruta = "recursos";
    if(this.state.value==="course")
      ruta = "materias";
     let axiosConfig = {headers: {'Content-Type': 'application/json;'}};
        axios.post(`${baseURL}/search`, {
         [`${this.state.value}_name`]: this.state.texto
       }, axiosConfig)
       .then(function (response) {
       	
        console.log(response.data[0].id)
        window.location.replace(`${ruta}/${response.data[0].id}`);
       //  this.setState({response.data.id});

        })
        .catch(function (error) {
        	swal("Ningun dato encontrado",'','error');
        console.log(error);
       });
  }
	render(){
		
		return(
			
					<div className="panel panel-default sidebar-menu wow fadeInRight animated" >
						<div className="panel-heading">
							<h3 className="panel-title">Busqueda</h3>
						</div>
						<div className="panel-body search-widget">
							<div action="" className=" form-inline"> 
								<fieldset>
									<div className="row">
										<div className="col-xs-12">
											<input type="text" id="texto" onChange={this.cambiarEstado} value={this.state.text} className="form-control" placeholder="Buscar..."/>
										</div>
									</div>
								</fieldset>

								<fieldset>
									<div className="row">
										<div className="col-xs-6">
										<select id="basic" className="selectpicker show-tick form-control" onChange={this.cambiarEstado} >
                     				    <option value ="teacher">Docentes</option>
                      					<option value ="course">Materias</option>
                                        <option value ="resource">Recursos</option>
                                        </select>
										</div>
										<div className="col-xs-6">
											<label >Score rango:</label>
											<input type="text" className="span2" value="" data-slider-min="0" data-slider-max="5" data-slider-step="1" data-slider-value="[0,5]" id="price-range" /><br />
											<b className="pull-left color">0</b>
											<b className="pull-right color">500</b>
										</div>
									</div>
								</fieldset>

								
								<fieldset >
									<div className="row">
										<div className="col-xs-12">  
											<input className="button btn largesearch-btn" onClick={this.realizarBusqueda} value="Buscar" type="submit" />
										</div>  
									</div>
								</fieldset>
							</div>
						</div>
					</div>

			
		);
	}
}

export default Busqueda;