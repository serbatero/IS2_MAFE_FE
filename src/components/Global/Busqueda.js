import React, { Component } from 'react';

class Busqueda extends Component {
	
	render(){
		
		return(
			<div className="col-md-3 p0 padding-top-40">
				<div className="blog-asside-right pr0">
					<div className="panel panel-default sidebar-menu wow fadeInRight animated" >
						<div className="panel-heading">
							<h3 className="panel-title">Busqueda</h3>
						</div>
						<div className="panel-body search-widget">
							<form action="" className=" form-inline"> 
								<fieldset>
									<div className="row">
										<div className="col-xs-12">
											<input type="text" className="form-control" placeholder="Key word"/>
										</div>
									</div>
								</fieldset>

								<fieldset>
									<div className="row">
										<div className="col-xs-6">
											<select id="basic" className="selectpicker show-tick form-control">
												<option> -Status- </option>
												<option>Docente</option>
												<option>Materia</option>
												<option>Recurso</option>
											</select>
										</div>
										<div className="col-xs-6">
											<label >Score range:</label>
											<input type="text" className="span2" value="" data-slider-min="0" data-slider-max="5" data-slider-step="1" data-slider-value="[0,5]" id="price-range" /><br />
											<b className="pull-left color">0</b>
											<b className="pull-right color">5</b>
										</div>
									</div>
								</fieldset>

								
								<fieldset >
									<div className="row">
										<div className="col-xs-12">  
											<input className="button btn largesearch-btn" value="Search" type="submit" />
										</div>  
									</div>
								</fieldset>
							</form>
						</div>
					</div>

			
				</div>
			</div>
		);
	}
}

export default Busqueda;