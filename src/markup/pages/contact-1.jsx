import React, {Component} from 'react';
import { Link } from 'react-router-dom';

// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

// Images
import bnrImg from "../../images/banner/bnr1.jpg";

class ContactUs extends Component{
	
	render(){
		return (
			<>
				
				<Header />
				
				<div className="page-content bg-white">
					
					<div className="page-banner ovbl-dark" style={{backgroundImage: "url("+bnrImg+")"}}>
						<div className="container">
							<div className="page-banner-entry text-center">
								<h1><span>Contact Us 1</span></h1>
								<nav aria-label="breadcrumb" className="breadcrumb-row">
									<ul className="breadcrumb">
										<li className="breadcrumb-item"><Link to="/"><i className="las la-home"></i>Home</Link></li>
										<li className="breadcrumb-item active" aria-current="page">Contact Us 1</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
					
					<section className="section-area section-sp1">
						<div className="container">
							<div className="heading-bx mb-20">
								<h6 className="title-ext text-primary">Contact Info</h6>
								<h2 className="title mb-0">CONTACT US FOR ANY <br/>INFORMATIONS</h2>
							</div>
							<div className="row">
								<div className="col-lg-4 col-md-4 col-sm-6">
									<div className="icon-box">
										<h6 className="title"><i className="ti-map-alt"></i>Location</h6>		
										<p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
									</div>
								</div>
								<div className="col-lg-4 col-md-4 col-sm-6">
									<div className="icon-box">
										<h6 className="title"><i className="ti-id-badge"></i>Email & Phone</h6>		
										<Link to="#">info@yourdomain.com</Link>
										<p>(+68) 120034509</p>
									</div>
								</div>
								<div className="col-lg-4 col-md-4 col-sm-12">
									<div className="icon-box">
										<h6 className="title"><i className="ti-world"></i>Follow Us</h6>
										<ul className="social-media">
											<li><a target="_blank" href="https://www.facebook.com/" rel="noreferrer" className="btn btn-primary"><i className="fa fa-facebook"></i></a></li>
											<li><a target="_blank" href="https://www.google.com/" rel="noreferrer" className="btn btn-primary"><i className="fa fa-google-plus"></i></a></li>
											<li><a target="_blank" href="https://www.linkedin.com/" rel="noreferrer" className="btn btn-primary"><i className="fa fa-linkedin"></i></a></li>
											<li><a target="_blank" href="https://twitter.com/" rel="noreferrer" className="btn btn-primary"><i className="fa fa-twitter"></i></a></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</section>
					
					<div className="section-area">
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.1298878182047!2d-81.38369578541523!3d30.204840081824198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e437ac927a996b%3A0x799695b1a2b970ab!2sNona+Blue+Modern+Tavern!5e0!3m2!1sen!2sin!4v1548177305546" className="align-self-stretch d-flex"
							style={{width: "100%", minHeight: "450px"}} title="map" allowfullscreen></iframe>
					</div>
					
					<section className="section-area section-sp2">
						<div className="container">		
							<div className="row">
								<div className="col-lg-12 col-md-12">
									<form className="contact-form ajax-form" action="script/contact.php">
										<div className="heading-bx mb-20">
											<h6 className="title-ext text-primary">Contact Form</h6>
											<h2 className="title mb-0">DO YOU HAVE ANY<br/> QUESTIONS</h2>
										</div>
										<div className="row">
											<div className="col-lg-4 col-md-6">
												<div className="form-group">
													<div className="input-group">
														<input name="name" type="text" required className="form-control valid-character" placeholder="Your Name"/>
													</div>
												</div>
											</div>
											<div className="col-lg-4 col-md-6">
												<div className="form-group">
													<div className="input-group"> 
														<input name="email" type="email" className="form-control" required  placeholder="Your Email Address"/>
													</div>
												</div>
											</div>
											<div className="col-lg-4 col-md-12">
												<div className="form-group">
													<div className="input-group">
														<input name="phone" type="text" required className="form-control int-value" placeholder="Your Phone"/>
													</div>
												</div>
											</div>
											<div className="col-lg-12">
												<div className="form-group">
													<div className="input-group">
														<textarea name="message" rows="4" className="form-control" placeholder="Type Message" required ></textarea>
													</div>
												</div>
											</div>
											<div className="col-lg-12">
												<button name="submit" type="submit" value="Submit" className="btn btn-primary btn-lg"> Send Message</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</section>
					
				</div>
				
				<Footer />
				
			</>
		);
	}
}

export default ContactUs;