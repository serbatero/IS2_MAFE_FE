import React, { Component } from 'react';
import swal from 'sweetalert2';
import axios from 'axios';
import store from '../../store';
import baseURL from '../../url';
//Assets
import like from './images/like.png';
import dislike from './images/dislike.png';


class Comentario extends Component {
	actionLike=(e)=>{
		let axiosConfig = {headers: {'Content-Type': 'application/json;'}};
          axios.post(`${baseURL}/scores`, {
         [`comment${this.props.type}`]: this.props.id,
         positive: 1,
         user_id: store.getState().id
      	 }, axiosConfig)
       	.then(function (response) {
      	 //  this.setState({response});
      	 swal("Su calificacion ha sido completada",'','success');
      	  setTimeout(function(){document.location.reload()},1000);
        })
        .catch(function (error) {
        	swal("Ya ha hecho una calificación",'','error');
        console.log(error);
       });
	}
	actionDislike=(e)=>{
		let axiosConfig = {headers: {'Content-Type': 'application/json;'}};
          axios.post(`${baseURL}/scores`, {
         [`comment${this.props.type}`]: this.props.id,
         negative: 1,
         user_id: store.getState().id
      	 }, axiosConfig)
       	.then(function (response) {
      	 //  this.setState({response});
      	 swal("Su calificacion ha sido completada",'','success');
      	  setTimeout(function(){document.location.reload()},1000);
        })
        .catch(function (error) {
        	swal("Ya ha hecho una calificación",'','error');
        console.log(error);
       });
	}

	render(){
		if(localStorage.getItem('jwtToken')){
		
		return(

			<div className="row comment">
					<div className="col-sm-3 col-md-2 text-center-xs">
						<p>
							<img src={this.props.avatar} className="img-responsive img-circle" alt="" />
						</p>
					</div>
					<div className="col-sm-9 col-md-10">
						<h6 className="text-uppercase"><a>{this.props.name}</a></h6>
						<p className="posted"><i className="fa fa-clock-o" />{this.props.date}</p>
						<p>{this.props.comment}</p>
						<div className="property-icon">
							<img src={like} alt="" onClick={this.actionLike} type ="submit"/> {this.props.likes}
							<img src={dislike} alt=""onClick={this.actionDislike}/> {this.props.dislikes}
						</div>	
					</div>
				</div>
		);}else{
			return(
				<div className="row comment">
					<div className="col-sm-3 col-md-2 text-center-xs">
						<p>
							<img src={this.props.avatar} className="img-responsive img-circle" alt="" />
						</p>
					</div>
					<div className="col-sm-9 col-md-10">
						<h6 className="text-uppercase"><a>{this.props.name}</a></h6>
						<p className="posted"><i className="fa fa-clock-o" />{this.props.date}</p>
						<p>{this.props.comment}</p>
						<div className="property-icon">
							<img src={like} alt="" type ="submit"/> {this.props.likes}
							<img src={dislike} alt=""/> {this.props.dislikes}
						</div>	
					</div>
				</div>

				);
		}
	}
}

export default Comentario;