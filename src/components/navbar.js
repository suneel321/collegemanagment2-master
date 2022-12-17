import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class navbar extends Component {

	render() {

		return (
			<div >
				<div className="kode_navigation_wrap">
					{/* <!--CONTAINER START--> */}
					<div className="container">

						<div className="navigation">
							<ul>
								<li><Link to="home">Home</Link>
									
								</li>
								<li><Link to="about">About Us</Link></li>
								<li><Link to="Services">Services</Link>
								
								</li>
								<li><Link to="projects">Projects</Link>
								
								</li>
								<li><Link to="blog">blog</Link>
								
								</li>
								<li><Link to="portfolio">portfolio</Link>
								
								</li>
								<li><Link to="pages">Pages</Link>
									
								</li>
								<li><Link to="contactUs">Contact</Link></li>
							</ul>
							{/* <!--DL Menu Start--> */}
							<div id="kode-responsive-navigation" className="dl-menuwrapper">
								<button className="dl-trigger">Open Menu</button>
								<ul className="dl-menu">
									<li><Link className="active" to="home">Home</Link></li>
									<li className="menu-item kode-parent-menu"><Link to="about">About Us</Link></li>
									<li className="menu-item kode-parent-menu"><Link to="Services">Services</Link></li>
									<li className="menu-item kode-parent-menu"><Link to="projects">Projects</Link></li>
									<li className="menu-item kode-parent-menu"><Link to="blog">blog</Link></li>
									<li className="menu-item kode-parent-menu"><Link to="blog">portfolio</Link></li>
									<li className="menu-item kode-parent-menu"><Link to="pages">Pages</Link></li>
									<li><Link to="contactUs">contact Us</Link></li>
								</ul>
							</div>
							{/* <!--DL Menu END--> */}
						</div>

					</div>
					{/* <!--CONTAINER END--> */}
				</div>
			</div>

		)

	}

}

export default navbar