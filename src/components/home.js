import React, { Component } from 'react';
import { Link } from 'react-router-dom';




class dashboard extends Component {

	render() {

		return (
			<div>


				
				{/* <!-- banner --> */}
				<div class="banner-agile">
					<ul class="slider">
						<li class="active">
							<div class="banner-w3ls-1">
							</div>
						</li>
						<li>
							<div class="banner-w3ls-2">
							</div>
						</li>
						<li>
							<div class="banner-w3ls-3">
							</div>
						</li>
						<li>
							<div class="banner-w3ls-4">
							</div>
						</li>
						<li class="prev">
							<div class="banner-w3ls-5">
							</div>
						</li>
					</ul>
					<ul class="pager">
						<li data-index="0" class="active"></li>
						<li data-index="1"></li>
						<li data-index="2"></li>
						<li data-index="3"></li>
						<li data-index="4"></li>
					</ul>
					<div class="banner-text-posi-w3ls">
						<div class="banner-text-whtree">
							<h3 class="text-capitalize text-white p-4">your bright future
					<b>is our mission!</b>
							</h3>
							<p class="px-4 py-3 text-dark">Become top-of-the-flight specialist after graduating!</p>
							<Link to="about" class="button-agiles text-capitalize text-white mt-sm-5 mt-4">read more</Link>
						</div>
					</div>

					{/* <!-- navigation --> */}
					<div class="navigation-w3ls">
						<nav class="navbar navbar-expand-lg navbar-light bg-light sticky-nav">
							<button class="navbar-toggler mx-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
								aria-expanded="false" aria-label="Toggle navigation">
								<span class="navbar-toggler-icon"></span>
							</button>
							<div class="collapse navbar-collapse text-center" id="navbarSupportedContent">
								<ul class="navbar-nav justify-content-center">
									<li class="nav-item active">
										<Link class="nav-link text-white" to="home">Home
								<span class="sr-only">(current)</span>
										</Link>
									</li>
									<li class="nav-item">
										<Link class="nav-link text-white" to="about">About Us</Link>
									</li>
									
									<li class="nav-item">
										<Link class="nav-link text-white" to="gallery">Gallery</Link>
									</li>
									<li class="nav-item">
										<Link class="nav-link text-white" to="contactUs">Contact Us</Link>
									</li>
								</ul>
							</div>
						</nav>
					</div>
					{/* <!-- //navigation --> */}
				</div>
				{/* <!-- //banner --> */}



				{/* <!-- about --> */}
	<div class="about py-5">
		<div class="container py-xl-5 py-lg-3">
			<h3 class="title text-capitalize font-weight-light text-dark text-center mb-5">
				<span class="font-weight-bold"> IQAC</span>
			</h3>
			<div class="row pt-md-4">
				
					<p >IQAC (Internal Quality assurance cell) to facilitate uniformly in terms of data collection across several
department in the university Internal Quality Assurance Cell (IQAC) as a post accreditation quality
sustenance measure for achieving the goals of academic excellence and ensuring quality higher education
in India.</p>
					
				
				
			</div>
		</div>
	</div>
	{/* <!-- //about --> */}

	{/* <!-- Stats--> */}
	{/* <div class="stats-w3layouts py-5">
		<div class="container py-xl-5 py-lg-3">
			<div class="stats-info">
				<div class="row">
					<div class="col-md-3 col-6 stats-grid-w3-agile text-center px-xl-5 px-3">
						<div class='numscroller font-weight-bold my-2' data-slno='1' data-min='0' data-max='1280' data-delay='.5' data-increment="1">1280</div>
						<p class="text-uppercase text-white border-top pt-4 mt-3">happy students</p>
					</div>
					<div class="col-md-3 col-6 stats-grid-w3-agile text-center  px-xl-5 px-3">
						<div class='numscroller font-weight-bold my-2' data-slno='1' data-min='0' data-max='920' data-delay='.5' data-increment="1">920</div>
						<p class="text-uppercase text-white border-top pt-4 mt-3">approved courses</p>
					</div>
					<div class="col-md-3 col-6 stats-grid-w3-agile text-center mt-md-0 mt-5  px-xl-5 px-3">
						<div class='numscroller font-weight-bold my-2' data-slno='1' data-min='0' data-max='1200' data-delay='.5' data-increment="1">1200</div>
						<p class="text-uppercase text-white border-top pt-4 mt-3">certified teachers</p>
					</div>
					<div class="col-md-3 col-6 stats-grid-w3-agile text-center mt-md-0 mt-5  px-xl-5 px-3">
						<div class='numscroller font-weight-bold my-2' data-slno='1' data-min='0' data-max='1200' data-delay='.5' data-increment="1">1200</div>
						<p class="text-uppercase text-white border-top pt-4 mt-3">graduate students</p>
					</div>
				</div>
			</div>
		</div>
	</div> */}
	{/* <!-- //Stats --> */}

	{/* <!-- course--> */}
	
	{/* <!-- //course --> */}

	{/* <!-- what we do --> */}
	
	{/* <!-- //what we do --> */}

	{/* <!-- video and events --> */}
	
	



			</div>
		)

	}

}
export default dashboard