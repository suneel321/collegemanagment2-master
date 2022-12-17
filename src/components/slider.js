import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {

	render() {

		return (
			<div >
				<div className="kode_banner_wrap">
					<div className="bx-wrapper" style={{ maxWidth: "100%" }}><div className="bx-viewport" aria-live="polite" style={{ width: "100%", overflow: "hidden", position: "relative", height: "530px" }} ><ul className="bxslider" style={{ width: "3215%", position: "relative", transitionDuration: "0s", transform: "translate3d(-1349px, 0px, 0px)" }}><li style={{ float: "left", listStyle: "none", position: "relative", width: "1349px" }} className="bx-clone" aria-hidden="true">
						<figure className="them_overlay">
							<img src="extra-images/banner2.jpg" alt="" />
							<div className="kode_banner_text">
								<div className="large_text">O Mankind</div>
								<div className="mediume_text">Remeber the favor of <span>ALLAH</span> upon you</div>
								<div className="small_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words...</div>
								<div className="koed_banner_btn">
									<a className="medium_btn border margin-right-1 btn_hover" href="index.html#">Read More</a>
									<a className="medium_btn border btn_hover" href="index.html#">Contact Us</a>
								</div>
							</div>
						</figure>
					</li>
						<li style={{ float: "left", listStyle: "none", position: "relative", width: "1349px" }} aria-hidden="false">
							<figure className="them_overlay">
								<img src="extra-images/banner.jpg" alt="" />
								<div className="kode_banner_text">
									<div className="large_text wow" style={{ visibility: "visible", animationName: "slideInUp" }}>O Mankind</div>
									<div className="mediume_text wow" style={{ visibility: "visible", animationName: "slideInUp" }}>Remeber the favor of <span>ALLAH</span> upon you</div>
									<div className="small_text wow" style={{ visibility: "visible", animationName: "slideInUp" }}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words...</div>
									<div className="koed_banner_btn wow" style={{ visibility: "visible", animationName: "slideInUp" }}>
										<a className="medium_btn border margin-right-1 btn_hover" href="index.html#">Read More</a>
										<a className="medium_btn border btn_hover" to="/contactus">Contact Us</a>
									</div>
								</div>
							</figure>
						</li>
						<li aria-hidden="true" style={{ float: "left", listStyle: "none", position: "relative", width: "1349px" }}>
							<figure className="them_overlay">
								<img src="extra-images/banner1.jpg" alt="" />
								<div className="kode_banner_text">
									<div className="large_text">O Mankind</div>
									<div className="mediume_text">Remeber the favor of <span>ALLAH</span> upon you</div>
									<div className="small_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words...</div>
									<div className="koed_banner_btn">
										<a className="medium_btn border margin-right-1 btn_hover" href="index.html#">Read More</a>
										<a className="medium_btn border btn_hover" href="index.html#">Contact Us</a>
									</div>
								</div>
							</figure>
						</li>
						<li style={{ float: "left", listStyle: "none", position: "relative", width: "1349px" }} aria-hidden="true">
							<figure className="them_overlay">
								<img src="extra-images/banner2.jpg" alt="" />
								<div className="kode_banner_text">
									<div className="large_text">O Mankind</div>
									<div className="mediume_text">Remeber the favor of <span>ALLAH</span> upon you</div>
									<div className="small_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words...</div>
									<div className="koed_banner_btn">
										<a className="medium_btn border margin-right-1 btn_hover" href="index.html#">Read More</a>
										<a className="medium_btn border btn_hover" href="index.html#">Contact Us</a>
									</div>
								</div>
							</figure>
						</li>
						<li style={{ float: "left", listStyle: "none", position: "relative", width: "1349px" }} className="bx-clone" aria-hidden="true">
							<figure className="them_overlay">
								<img src="extra-images/banner.jpg" alt="" />
								<div className="kode_banner_text">
									<div className="large_text wow" style={{ visibility: "visible", animationName: "slideInUp" }}>O Mankind</div>
									<div className="mediume_text wow" style={{ visibility: "visible", animationName: "slideInUp" }}>Remeber the favor of <span>ALLAH</span> upon you</div>
									<div className="small_text wow" style={{ visibility: "visible", animationName: "slideInUp" }}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words...</div>
									<div className="koed_banner_btn wow" style={{ visibility: "visible", animationName: "slideInUp" }}>
										<a className="medium_btn border margin-right-1 btn_hover" href="index.html#">Read More</a>
										<a className="medium_btn border btn_hover" href="index.html#">Contact Us</a>
									</div>
								</div>
							</figure>
						</li></ul></div><div className="bx-controls bx-has-controls-direction"><div className="bx-controls-direction"><a className="bx-prev" href="">Prev</a><a className="bx-next" href="">Next</a></div></div></div>
					<div id="bx-pager" className="pager_link">
						<a data-slide-index="0" href="index.html" className="active"><img src="extra-images/banner2.jpg" alt="" /></a>
						<a data-slide-index="1" href="index.html" className=""><img src="extra-images/banner.jpg" alt="" /></a>
						<a data-slide-index="2" href="index.html" className=""><img src="extra-images/banner1.jpg" alt="" /></a>
					</div>
				</div>
			</div>

		)

	}

}

export default Header