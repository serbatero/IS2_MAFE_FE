// Dependencias
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Footer extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired
    };
    render() {
        const { items } = this.props;
        return (
            <div className="footer-area">
                <div className=" footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-6 wow fadeInRight animated">
                                <div className="single-footer">
                                    <h4>Quienes somos </h4>
                                    <div className="footer-title-line" />
                                    <p>Lorem ipsum dolor cum necessitatibus su quisquam molestias. Vel unde, blanditiis.</p>
                                    <ul className="footer-adress">
                                        <li><i className="pe-7s-mail strong"> </i> yodah@mafe.com</li>
                                        <li><i className="pe-7s-call strong"> </i> +1 908 967 5906</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 wow fadeInRight animated">
                                <div className="single-footer">
                                    <h4>Enlaces rápidos </h4>
                                    <div className="footer-title-line" />
                                    <ul className="footer-menu">
                                        {
                                     items && items.map(
                                    (item, key) => <li className="wow fadeInUp animated" data-wow-delay="1s" key={key}>
                                     <Link  to={item.url}>{item.title}</Link></li>
                                                                            )
                                    }
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 wow fadeInRight animated">
                                <div className="single-footer">
                                    <h4>Últimas noticias</h4>
                                    <div className="footer-title-line" />
                                    <ul className="footer-blog">
                                        <li>
                                            
                                        </li> 
                                        <li>
                                            
                                        </li> 
                                        <li>
                                         
                                        </li> 
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 wow fadeInRight animated">
                                <div className="single-footer news-letter">
                                    <h4>Contáctenos</h4>
                                    <div className="footer-title-line" />
                                    <p>Lorem ipsum dolor sit amet, nulla  suscipit similique quisquam molestias. Vel unde, blanditiis.</p>
                                    <form>
                                        <div className="input-group">
                                            <input className="form-control" type="text" placeholder="E-mail ... " />
                                            <span className="input-group-btn">
                                                <button className="btn btn-primary subscribe" type="button"><i className="pe-7s-paper-plane pe-2x" /></button>
                                            </span>
                                        </div>
                                        {/* /input-group */}
                                    </form> 
                                    <div className="social pull-right"> 
                                        <ul>
                                            <li><a className="wow fadeInUp animated" href="/"><i className="fa fa-twitter" /></a></li>
                                            <li><a className="wow fadeInUp animated" href="/" data-wow-delay="0.2s"><i className="fa fa-facebook" /></a></li>
                                            <li><a className="wow fadeInUp animated" href="/" data-wow-delay="0.3s"><i className="fa fa-google-plus" /></a></li>
                                            <li><a className="wow fadeInUp animated" href="/" data-wow-delay="0.4s"><i className="fa fa-instagram" /></a></li>
                                            <li><a className="wow fadeInUp animated" href="/" data-wow-delay="0.6s"><i className="fa fa-dribbble" /></a></li>
                                        </ul> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copy text-center">
                    <div className="container">
                        <div className="row">
                            <div className="pull-left">
                                <span> (C) <a href="/">MAFE</a> , Todos los derechos reservados 2018</span> 
                            </div> 
                            <div className="bottom-menu pull-right"> 
                         
                                <ul> 
                                     {
                                     items && items.map(
                                    (item, key) => <li className="wow fadeInUp animated" data-wow-delay="1.5s" key={key}>
                                     <Link  to={item.url}>{item.title}</Link></li>
                                                                            )
                                    }
                                </ul> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;