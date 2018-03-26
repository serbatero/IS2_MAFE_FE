import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
        <div className="footer-area">
            <div className=" footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 wow fadeInRight animated">
                            <div className="single-footer">
                                <h4>About us </h4>
                                <div className="footer-title-line"></div>
                                <img src="assets/img/footer-logo.png" alt="" className="wow pulse" data-wow-delay="1s"/>
                                <p>Lorem ipsum dolor cum necessitatibus su quisquam molestias. Vel unde, blanditiis.</p>
                                <ul className="footer-adress">
                                    <li><i className="pe-7s-map-marker strong"> </i> 9089 your adress her</li>
                                    <li><i className="pe-7s-mail strong"> </i> email@yourcompany.com</li>
                                    <li><i className="pe-7s-call strong"> </i> +1 908 967 5906</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 wow fadeInRight animated">
                            <div className="single-footer">
                                <h4>Quick links </h4>
                                <div className="footer-title-line"></div>
                                <ul className="footer-menu">
                                    <li><a href="properties.html">Properties</a>  </li> 
                                    <li><a href="#">Services</a>  </li> 
                                    <li><a href="submit-property.html">Submit property </a></li> 
                                    <li><a href="contact.html">Contact us</a></li> 
                                    <li><a href="faq.html">fqa</a>  </li> 
                                    <li><a href="faq.html">Terms </a>  </li> 
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 wow fadeInRight animated">
                            <div className="single-footer">
                                <h4>Last News</h4>
                                <div className="footer-title-line"></div>
                                <ul className="footer-blog">
                                    <li>
                                        <div className="col-md-3 col-sm-4 col-xs-4 blg-thumb p0">
                                            <a href="single.html">
                                                <img src="assets/img/demo/small-proerty-2.jpg"/>
                                            </a>
                                            <span className="blg-date">12-12-2016</span>
                                        </div>
                                        <div className="col-md-8  col-sm-8 col-xs-8  blg-entry">
                                            <h6> <a href="single.html">Add news functions </a></h6> 
                                            <p style={{lineHeight: '17px', padding: '8px 2px'}}>Lorem ipsum dolor sit amet, nulla ...</p>
                                        </div>
                                    </li> 

                                    <li>
                                        <div className="col-md-3 col-sm-4 col-xs-4 blg-thumb p0">
                                            <a href="single.html">
                                                <img src="assets/img/demo/small-proerty-2.jpg"/>
                                            </a>
                                            <span className="blg-date">12-12-2016</span>

                                        </div>
                                        <div className="col-md-8  col-sm-8 col-xs-8  blg-entry">
                                            <h6> <a href="single.html">Add news functions </a></h6> 
                                            <p style={{lineHeight: '17px', padding: '8px 2px'}}>Lorem ipsum dolor sit amet, nulla ...</p>
                                        </div>
                                    </li> 

                                    <li>
                                        <div className="col-md-3 col-sm-4 col-xs-4 blg-thumb p0">
                                            <a href="single.html">
                                                <img src="assets/img/demo/small-proerty-2.jpg"/>
                                            </a>
                                            <span className="blg-date">12-12-2016</span>
                                        </div>
                                        <div className="col-md-8  col-sm-8 col-xs-8  blg-entry">
                                            <h6> <a href="single.html">Add news functions </a></h6> 
                                            <p style={{lineHeight: '17px', padding: '8px 2px'}}>Lorem ipsum dolor sit amet, nulla ...</p>
                                        </div>
                                    </li> 

                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 wow fadeInRight animated">
                            <div className="single-footer news-letter">
                                <h4>Stay in touch</h4>
                                <div className="footer-title-line"></div>
                                <p>Lorem ipsum dolor sit amet, nulla  suscipit similique quisquam molestias. Vel unde, blanditiis.</p>

                                <form>
                                    <div className="input-group">
                                        <input className="form-control" type="text" placeholder="E-mail ... "/>
                                        <span className="input-group-btn">
                                            <button className="btn btn-primary subscribe" type="button"><i className="pe-7s-paper-plane pe-2x"></i></button>
                                        </span>
                                    </div>                                   
                                </form> 

                                <div className="social pull-right"> 
                                    <ul>
                                        <li><a className="wow fadeInUp animated" href="https://twitter.com/kimarotec"><i className="fa fa-twitter"></i></a></li>
                                        <li><a className="wow fadeInUp animated" href="https://www.facebook.com/kimarotec" data-wow-delay="0.2s"><i className="fa fa-facebook"></i></a></li>
                                        <li><a className="wow fadeInUp animated" href="https://plus.google.com/kimarotec" data-wow-delay="0.3s"><i className="fa fa-google-plus"></i></a></li>
                                        <li><a className="wow fadeInUp animated" href="https://instagram.com/kimarotec" data-wow-delay="0.4s"><i className="fa fa-instagram"></i></a></li>
                                        <li><a className="wow fadeInUp animated" href="https://instagram.com/kimarotec" data-wow-delay="0.6s"><i className="fa fa-dribbble"></i></a></li>
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
                            <span> (C) <a href="http://www.KimaroTec.com">KimaroTheme</a> , All rights reserved 2016  </span> 
                        </div> 
                        <div className="bottom-menu pull-right"> 
                            <ul> 
                                <li><a className="wow fadeInUp animated" href="#" data-wow-delay="0.2s">Home</a></li>
                                <li><a className="wow fadeInUp animated" href="#" data-wow-delay="0.3s">Property</a></li>
                                <li><a className="wow fadeInUp animated" href="#" data-wow-delay="0.4s">Faq</a></li>
                                <li><a className="wow fadeInUp animated" href="#" data-wow-delay="0.6s">Contact</a></li>
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