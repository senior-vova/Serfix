import React,{Component,useState, useEffect} from 'react'; 
import {Link} from 'react-router-dom';
import Masonry from 'react-masonry-component';
import SimpleReactLightbox, {SRLWrapper, useLightbox} from 'simple-react-lightbox';

// Images
import Pic1 from "../../../images/portfolio/image_1.jpg"
import Pic2 from "../../../images/portfolio/image_2.jpg"
import Pic3 from "../../../images/portfolio/image_3.jpg"
import Pic4 from "../../../images/portfolio/image_4.jpg"
import Pic5 from "../../../images/portfolio/image_5.jpg"
import Pic6 from "../../../images/portfolio/image_6.jpg"

// Portfolio Content
const content = [
	{ 
		thumb: Pic1, 
		LightImg: Pic1,
		tag: ['Oil & Gas',],
		title: "OIL CHANGE",
		exeTitle: "SERVICES",
	},
	{ 
		thumb: Pic2,
		LightImg: Pic2,
		tag: ['Oil & Gas',],
		title: "BREAK REPAIR",
		exeTitle: "SERVICES",
	},
	{ 
		thumb: Pic3,
		LightImg: Pic3,
		tag: ['Industrial',],
		title: "CAR WHEELS",
		exeTitle: "SERVICES",
	},
	{ 
		thumb: Pic4,
		LightImg: Pic4,
		tag: ['Chemical',],
		title: "GENERAL SERVICE",
		exeTitle: "SERVICES",
	},
	{ 
		thumb: Pic5,
		LightImg: Pic5,
		tag: ['development',],
		title: "OIL CHANGE",
		exeTitle: "SERVICES",
	},
	{ 
		thumb: Pic6,
		LightImg: Pic6,		
		tag: ['Metallurgy',],
		title: "BREAK REPAIR",
		exeTitle: "SERVICES",
	},
	{ 
		thumb: Pic1,
		LightImg: Pic1,		
		tag: ['Industrial',],
		title: "CAR WHEELS",
		exeTitle: "SERVICES",
	},
	{ 
		thumb: Pic2,
		LightImg: Pic2,
		tag: ['Metallurgy',],
		title: "GENERAL SERVICE",
		exeTitle: "SERVICES",
	},
	{ 
		thumb: Pic3,
		LightImg: Pic3,
		tag: ['Metallurgy',],
		title: "GENERAL SERVICE",
		exeTitle: "SERVICES",
	},
]

// Magnific Anchor
const MagnificAnchor = props => {
	const { openLightbox } = useLightbox()

	return (
		<Link  to={"#"} onClick={() => openLightbox(props.imageToOpen)} className="magnific-anchor">View Image</Link>
	)
}

const options = {
	settings: {
		overlayColor: "rgba(0,0,0,0.9)",
		backgroundColor: "#fe5a0e",
		slideAnimationType: 'slide',
	},
	buttons: {
		backgroundColor: "#fe5a0e",
		iconColor: "rgba(255, 255, 255, 1)",
		showAutoplayButton: false,
		showDownloadButton: false,
	},
	caption: {
		captionColor: "#a6cfa5",
		captionFontFamily: "Raleway, sans-serif",
		captionFontWeight: "300",
		captionTextTransform: "uppercase",
	}
};

const FilterList = ({dataFilter, defaultTag, activeFilter}) => {                                                               
	return (	
		<li className={`${activeFilter ? 'btn active' : 'btn'}`} onClick={() => defaultTag(dataFilter)} >
			<Link to={"#"}><span>{dataFilter}</span></Link>
		</li> 
	);
};

function GalleryContent(){
	const [tag, setTag] = useState('All Cases');
	const [filteredImages, setFilterdImages] = useState([]);
	
	useEffect( () => {
		tag === 'All Cases' ? setFilterdImages(content) : setFilterdImages(content.filter( image => image.tag.find(element => element === tag)))
	}, [tag])	
	
	return(
			
			<>
			
			<div className="feature-filters filter-style2 text-center">
				<ul className="filters" data-toggle="buttons">
					<FilterList 
						dataFilter="All Cases" 
						defaultTag={setTag} 
						activeFilter={ tag === 'All Cases' ? true : false }	
					/>
					<FilterList 
						dataFilter="Oil & Gas" 
						defaultTag={setTag} 
						activeFilter={ tag === 'OIL CHANGE' ? true : false }
					/>
					<FilterList 
						dataFilter="Chemical" 
						defaultTag={setTag} 
						activeFilter={ tag === 'BREAK REPAIR' ? true : false }
					/>
					<FilterList 
						dataFilter="Metallurgy"
						defaultTag={setTag} 
						activeFilter={ tag === 'CAR WHEELS' ? true : false }	
					/>
					<FilterList 
						dataFilter="Industrial"
						defaultTag={setTag} 
						activeFilter={ tag === 'GENERAL SERVICE' ? true : false }	
					/>
				</ul>
			</div>
			
			<SimpleReactLightbox>
				<SRLWrapper options={options}>
					<Masonry className="row sp5 mb-0">
						{filteredImages.map((item, index)=>(	
							<div className="action-card col-lg-4 col-md-6 col-sm-12 col-12" key={index}>
								<div className="portfolio-box style-2 mb-2">
									<div className="portfolio-media">
										<img src={item.thumb} alt=""/>
									</div>
									<div className="portfolio-info">
										<h4 className="title"><Link to="/service-engine-diagnostics">{item.title}</Link></h4>
										<span className="exe-title">{item.exeTitle}</span>	
									</div>
									<MagnificAnchor />
								</div>
							</div>
						))}	
					</Masonry>
				</SRLWrapper>
			</SimpleReactLightbox>
		</>
		
	);
}

class GalleryMasonry extends Component{
	render(){
		return(
			<>
				<GalleryContent />
			</>
		)
	}
}
export default GalleryMasonry;