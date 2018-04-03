// Dependencias
import React, { Component } from 'react';

//Assets
import Like from '../Global/images/like.png';
import Dislike from '../Global/images/dislike.png';
import Image from '../Global/images/book.png';


class Recurso extends Component {
	render(){
		return(
			<div className="col-sm-6 col-md-4 p0">
				<div className="box-two proerty-item">
					<div className="item-thumb" >
						<img src={Image}  alt=""/>
					</div>
					<div className="item-entry overflow">
						<h5><a>{this.props.name}</a></h5>
						<div className="dot-hr"></div>
						<span className="pull-left"><b> Score :</b> {this.props.scoreresource_id} </span>
						<span className="proerty-price pull-left"> <b>Link:</b> {this.props.link}</span>
						<p style={{display: undefined}}></p>
						<div className="property-icon">
							<img src={Like} alt=""/>(2)
							<img src={Dislike} alt=""/>(1)  
						</div>
					</div>
				</div>
			</div>	
		);
	}
}

export default Recurso;