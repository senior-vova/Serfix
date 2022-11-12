import React, {Component} from 'react';
import { Link } from 'react-router-dom';

// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

// Elements
import GallerySection from "../elements/gallery/content1";

// Images
import bnrImg from "../../images/banner/bnr5.jpg";

class Gallery extends Component{
	
	render(){
		return (
			<>
				
				<Header />
				
				<div className="page-content bg-white">
					
					<div className="page-banner ovbl-dark" style={{backgroundImage: "url("+bnrImg+")"}}>
						<div className="container">
							<div className="page-banner-entry text-center">
								<h1><span>Our Gallery</span></h1>
								<nav aria-label="breadcrumb" className="breadcrumb-row">
									<ul className="breadcrumb">
										<li className="breadcrumb-item"><Link to="/"><i className="las la-home"></i>Home</Link></li>
										<li className="breadcrumb-item active" aria-current="page">Our Gallery</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
					
					<div className="section-area section-sp2 bg-white">
						<div className="container">
							<GallerySection />
						</div>
					</div>
				
				</div>
				
				<Footer />
				
			</>
		);
	}
}

export default Gallery;