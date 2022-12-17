import React, { Component } from 'react';
import { Link } from 'react-router-dom'


import TopHeader from '../components/TopHeader'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

class Header extends Component {

	render() {

		return (
			<div >
				<TopHeader />
				<Navbar />
				<div className="kode_sab_banner_wrap them_overlay">
					{/* <!--CONTAINER START--> */}
					<div className="container">
						<div className="sab_banner_text">
							<h2>Portfolio</h2>
							<ul className="breadcrumbs">
								<li><a href="portfolio-02.html"><i className="fa fa-home"></i></a></li>
								<li><strong>Portfolio</strong></li>
							</ul>
						</div>
					</div>
					{/* <!--CONTAINER END--> */}
				</div>

				{/* 2 */}
				<div className="kode_blog_madium_wrap">
					{/* <!--CONTAINER START--> */}
					<div className="container">
						<div className="row">
							<div className="kode_portfolio_detail">
								<ul className="simplefilter">
									<li><Link className="active" data-filter="all" to="portfolio">Show All</Link></li>
									<li><Link data-filter="1" to="portfolio">Islamic</Link></li>
									<li><Link data-filter="2" to="portfolio">Zakt</Link></li>
									<li><Link data-filter="3" to="portfolio">Hajj</Link></li>
									<li><Link data-filter="4" to="portfolio">Flood</Link></li>
									<li><Link data-filter="5" to="portfolio">Earth Quake</Link></li>
								</ul>
							</div>
							<div className="filtr-container" style={{ padding: "0px", position: "relative", height: "796px" }}>
								<div className="col-md-4 filtr-item" data-category="1, 5" style={{ opacity: "1", transform: "scale(1) translate3d(0px, 0px, 0px)", backfaceVisibility: "hidden", perspective: "1000px", transformStyle: "preserve-3d", position: "absolute", transition: "all 0.5s ease-out 0ms", pointerEvents: "auto" }}>
									<div className="kode_portfolio_des">
										<figure className="them_overlay">
											<img src="extra-images/port1.jpg" alt="" />
										</figure>
										<div className="kode_portfolio_text">
											<h4><a href="portfolio-02.html#">Children Welfare Event</a></h4>
											<p>Lorem ipsum dolor sit amet, consectetur elit adipiscing elit. Morbi non tincidunt orci...</p>
										</div>
									</div>
								</div>

								<div className="col-md-4 class filtr-item" data-category="2, 3" style={{ opacity: "1", transform: "scale(1) translate3d(380px, 0px, 0px)", backfaceVisibility: "hidden", perspective: "1000px", transformStyle: "preserve-3d", position: "absolute", transition: "all 0.5s ease-out 0ms", pointerEvents: "auto" }}>
									<div className="kode_portfolio_des">
										<figure className="them_overlay">
											<img src="extra-images/port2.jpg" alt="" />
										</figure>
										<div className="kode_portfolio_text">
											<h4><a href="portfolio-02.html#">Children Welfare Event</a></h4>
											<p>Lorem ipsum dolor sit amet, consectetur elit adipiscing elit. Morbi non tincidunt orci...</p>
										</div>
									</div>
								</div>

								<div className="col-md-4 filtr-item" data-category="2, 4" style={{ opacity: "1", transform: "scale(1) translate3d(760px, 0px, 0px)", backfaceVisibility: "hidden", perspective: "1000px", transformStyle: "preserve-3d", position: "absolute", transition: "all 0.5s ease-out 0ms", pointerEvents: "auto" }}>
									<div className="kode_portfolio_des">
										<figure className="them_overlay">
											<img src="extra-images/port3.jpg" alt="" />
										</figure>
										<div className="kode_portfolio_text">
											<h4><a href="portfolio-02.html#">Children Welfare Event</a></h4>
											<p>Lorem ipsum dolor sit amet, consectetur elit adipiscing elit. Morbi non tincidunt orci...</p>
										</div>
									</div>
								</div>

								<div className="col-md-4 filtr-item" data-category="1, 3" style={{ opacity: "1", transform: "scale(1) translate3d(0px, 398px, 0px)", backfaceVisibility: "hidden", perspective: "1000px", transformStyle: "preserve-3d", position: "absolute", transition: "all 0.5s ease-out 0ms", pointerEvents: "auto" }}>
									<div className="kode_portfolio_des">
										<figure className="them_overlay">
											<img src="extra-images/port4.jpg" alt="" />
										</figure>
										<div className="kode_portfolio_text">
											<h4><a href="portfolio-02.html#">Children Welfare Event</a></h4>
											<p>Lorem ipsum dolor sit amet, consectetur elit adipiscing elit. Morbi non tincidunt orci...</p>
										</div>
									</div>
								</div>

								<div className="col-md-4 filtr-item" data-category="2, 1" style={{ opacity: "1", transform: "scale(1) translate3d(380px, 398px, 0px)", backfaceVisibility: "hidden", perspective: "1000px", transformStyle: "preserve-3d", position: "absolute", transition: "all 0.5s ease-out 0ms", pointerEvents: "auto" }}>
									<div className="kode_portfolio_des">
										<figure className="them_overlay">
											<img src="extra-images/port5.jpg" alt="" />
										</figure>
										<div className="kode_portfolio_text">
											<h4><a href="portfolio-02.html#">Children Welfare Event</a></h4>
											<p>Lorem ipsum dolor sit amet, consectetur elit adipiscing elit. Morbi non tincidunt orci...</p>
										</div>
									</div>
								</div>

								<div className="col-md-4 filtr-item" data-category="2, 3" style={{ opacity: "1", transform: "scale(1) translate3d(760px, 398px, 0px)", backfaceVisibility: "hidden", perspective: "1000px", transformStyle: "preserve-3d", position: "absolute", transition: "all 0.5s ease-out 0ms", pointerEvents: "auto" }}>
									<div className="kode_portfolio_des">
										<figure className="them_overlay">
											<img src="extra-images/port6.jpg" alt="" />
										</figure>
										<div className="kode_portfolio_text">
											<h4><a href="portfolio-02.html#">Children Welfare Event</a></h4>
											<p>Lorem ipsum dolor sit amet, consectetur elit adipiscing elit. Morbi non tincidunt orci...</p>
										</div>
									</div>
								</div>
							</div>
							{/* <!--KODE PAGINATION LIST START--> */}
							<div className="kode_pagination_list">
								<ul className="kode_pagination">
									<li><a className="prve" href="portfolio-02.html#"><i className="fa fa-arrow-left"></i>Previous</a></li>
									<li><a href="portfolio-02.html#">1</a></li>
									<li><a href="portfolio-02.html#">2</a></li>
									<li><a href="portfolio-02.html#">3</a></li>
									<li><a className="next" href="portfolio-02.html#">Next<i className="fa fa-arrow-right"></i></a></li>
								</ul>
							</div>
							{/* <!--KODE PAGINATION LIST END--> */}
						</div>
					</div>
					{/* <!--CONTAINER END--> */}
				</div>
				<Footer />

			</div>

		)

	}

}

export default Header