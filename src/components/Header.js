import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			
				<nav className="navbar navbar-default ">
						<div className="container">
								<div className="collapse navbar-collapse yamm" id="navigation">
										<img src="assets/img/logo.png" width="270px" height="150px" alt=""/>
										<div className="button navbar-right">
											 <button className="navbar-btn nav-button wow bounceInRight login" onclick=" window.open('registro.html')" data-wow-delay="0.45s">Iniciar sesión</button>
											 <button className="navbar-btn nav-button wow fadeInRight" onclick=" window.open('registro.html')" data-wow-delay="0.5s">Registro</button>
										</div>
										<ul className="main-nav nav navbar-nav navbar-right">
									 
												<li className="wow fadeInDown" data-wow-delay="0.1s"><a  data-delay="200" href="index.html">Inicio</a></li>
												<li className="wow fadeInDown" data-wow-delay="0.2s"><a className="" href="index.html">Materias</a></li>
												<li className="wow fadeInDown" data-wow-delay="0.3s"><a className="" href="#">Docentes</a></li>
												<li className="wow fadeInDown" data-wow-delay="0.4s"><a href="">Recursos</a></li>
												<li className="wow fadeInDown" data-wow-delay="0.5s"><a href="#">Contáctenos</a></li>
										</ul>
								</div>
						</div>
				</nav>			
		);
	}
}

export default Header;
