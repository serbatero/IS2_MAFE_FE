//Dependencias
import React, { Componet } from 'react';

class Page404 extends Componet{
	render(){
		return(
			<div className="content-area error-page" style={{backgroundColor: '#FCFCFC', paddingBottom: 55}}>
				<div className="container">
					<div className="row">
						<div className="col-md-10 col-md-offset-1 col-sm-12 text-center page-title">
							<h2 className="error-title">404</h2>
							<p>Lo sentimos, es posible que la página solicitada se haya movido o eliminado</p>
							<a href="/" className="btn btn-default">Inicio</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Page404;