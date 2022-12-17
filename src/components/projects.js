import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Header extends Component {

	render() {

		return (
			<div >
	
{/* <!-- banner --> */}
				<div class="banner-agile-2">
					{/* <!-- navigation --> */}
					<div class="navigation-w3ls">
						<nav class="navbar navbar-expand-lg navbar-light bg-light sticky-nav">
							<button class="navbar-toggler mx-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
								aria-expanded="false" aria-label="Toggle navigation">
								<span class="navbar-toggler-icon"></span>
							</button>
							<div class="collapse navbar-collapse text-center" id="navbarSupportedContent">
								<ul class="navbar-nav justify-content-center">
									<li class="nav-item">
										<Link class="nav-link text-white" to="home">Home
								<span class="sr-only">(current)</span>
										</Link>
									</li>
									<li class="nav-item">
										<Link class="nav-link text-white" to="about">About Us</Link>
									</li>
									<li class="nav-item dropdown">
										<Link class="nav-link dropdown-toggle text-white" to="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											Courses
							</Link>
										<div class="dropdown-menu">
											<Link class="dropdown-item" to="courses">Language</Link>
											<Link class="dropdown-item" to="coursedetails">Course Details</Link>
											<div class="dropdown-divider"></div>
											<Link class="dropdown-item" to="form">Apply Now</Link>
										</div>
									</li>
									<li class="nav-item dropdown">
										<Link class="nav-link dropdown-toggle text-white" to="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											Pages
							</Link>
										<div class="dropdown-menu">
											<Link class="dropdown-item" to="about">Instructors</Link>
											<Link class="dropdown-item" to="home">What We Do</Link>
											<Link class="dropdown-item" to="login">Login</Link>
											<Link class="dropdown-item" to="404">404 Page</Link>
											<Link class="dropdown-item" to="form">Admission Form</Link>
											<Link class="dropdown-item" to="faq">Faq</Link>
										</div>
									</li>
									<li class="nav-item">
										<Link class="nav-link text-white" to="Blog">Blog</Link>
									</li>
									<li class="nav-item">
										<Link class="nav-link text-white" to="gallery">Gallery</Link>
									</li>
									<li class="nav-item active">
										<Link class="nav-link text-white" to="contactUs">Contact Us</Link>
									</li>
								</ul>
							</div>
						</nav>
					</div>
					{/* <!-- //navigation --> */}
				</div>
				{/* <!-- breadcrumb --> */}
				<nav aria-label="breadcrumb">
					<ol class="breadcrumb">
						<li class="breadcrumb-item">
							<Link to="home">Home</Link>
						</li>
						<li class="breadcrumb-item active" aria-current="page">Contact Us</li>
					</ol>
				</nav>
				{/* <!-- breadcrumb --> */}
				{/* <!-- //banner --> */}



				{/* <!-- //banner --> */}




	{/* <!-- course--> */}
	<div class="course-w3ls py-5">
		<div class="container py-xl-5 py-lg-3">
			<h3 class="title text-capitalize font-weight-light text-dark text-center mb-sm-5 mb-4">course -
				<span class="font-weight-bold">Language</span>
			</h3>
			<div class="row cource-list-agile pt-4">
				<div class="col-lg-7 agile-course-main">
					<div class="w3ls-cource-first">
						<img src="images/1.png" alt="" class="img-fluid img-poiscour mx-auto d-block mt-2"></img>
						<div class="px-md-5 px-4  pb-md-5 pb-4">
							<h3 class="text-dark">Advanced Language English</h3>
							<p class="mt-3 mb-4 pr-lg-5">accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.</p>
							<ul class="list-unstyled text-capitalize">
								<li>
									<i class="fas fa-calendar-alt mr-3"></i>may - aug 2018</li>
								<li class="my-3">
									<i class="fas fa-clock mr-3"></i>4 - 6 hours</li>
								<li>
									<i class="fas fa-users mr-3"></i>70 seats</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="col-lg-5 agile-course-main-2 mt-4">
					<img src="images/am1.jpg" alt="" class="img-fluid"/>
				</div>
				<div class="buttons-w3ls">
					<a class="btn button-cour-w3ls text-white" href="course_details.html" role="button">Learn More</a>
					<a class="btn bg-dark text-white" href="form.html" role="button">Apply Now</a>
				</div>
			</div>
			<div class="row cource-list-agile cource-list-agile-2">
				<div class="col-lg-5 agile-course-main-3 mt-4">
					<img src="images/am2.jpg" alt="" class="img-fluid"/>
				</div>
				<div class="col-lg-7 agile-course-main text-right">
					<div class="w3ls-cource-first">
						<img src="images/2.png" alt="" class="img-fluid img-poiscour mx-auto d-block mt-2"></img>
						<div class="px-md-5 px-4  pb-md-5 pb-4">
							<h3 class="text-dark">Advanced Language Japanese</h3>
							<p class="mt-3 mb-4 pl-lg-4">accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.</p>
							<ul class="list-unstyled text-capitalize">
								<li>june - aug 2018
									<i class="fas fa-calendar-alt ml-3"></i>
								</li>
								<li class="my-3">3 - 6 hours
									<i class="fas fa-clock ml-3"></i>
								</li>
								<li>60 seats
									<i class="fas fa-users ml-3"></i>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="buttons-w3ls-2">
					<a class="btn button-cour-w3ls text-white" href="course_details.html" role="button">Learn More</a>
					<a class="btn bg-dark text-white" href="form.html" role="button">Apply Now</a>
				</div>
			</div>
			<div class="row cource-list-agile pt-4">
				<div class="col-lg-7 agile-course-main">
					<div class="w3ls-cource-first">
						<img src="images/1.png" alt="" class="img-fluid img-poiscour mx-auto d-block mt-2"></img>
						<div class="px-md-5 px-4  pb-md-5 pb-4">
							<h3 class="text-dark">The Art Language Of Translation</h3>
							<p class="mt-3 mb-4 pr-lg-5">accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.</p>
							<ul class="list-unstyled text-capitalize">
								<li>
									<i class="fas fa-calendar-alt mr-3"></i>may - aug 2018</li>
								<li class="my-3">
									<i class="fas fa-clock mr-3"></i>4 - 6 hours</li>
								<li>
									<i class="fas fa-users mr-3"></i>70 seats</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="col-lg-5 agile-course-main-2 mt-4">
					<img src="images/am3.jpg" alt="" class="img-fluid"/>
				</div>
				<div class="buttons-w3ls">
					<a class="btn button-cour-w3ls text-white" href="course_details.html" role="button">Learn More</a>
					<a class="btn bg-dark text-white" href="form.html" role="button">Apply Now</a>
				</div>
			</div>
			<div class="row cource-list-agile cource-list-agile-2">
				<div class="col-lg-5 agile-course-main-3 mt-4">
					<img src="images/am4.jpg" alt="" class="img-fluid"/>
				</div>
				<div class="col-lg-7 agile-course-main text-right">
					<div class="w3ls-cource-first">
						<img src="images/2.png" alt="" class="img-fluid img-poiscour mx-auto d-block mt-2"></img>
						<div class="px-md-5 px-4  pb-md-5 pb-4">
							<h3 class="text-dark">Experiential Learning Language Focus</h3>
							<p class="mt-3 mb-4 pl-lg-4">accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.</p>
							<ul class="list-unstyled text-capitalize">
								<li>june - aug 2018
									<i class="fas fa-calendar-alt ml-3"></i>
								</li>
								<li class="my-3">3 - 6 hours
									<i class="fas fa-clock ml-3"></i>
								</li>
								<li>60 seats
									<i class="fas fa-users ml-3"></i>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="buttons-w3ls-2">
					<a class="btn button-cour-w3ls text-white" href="course_details.html" role="button">Learn More</a>
					<a class="btn bg-dark text-white" href="form.html" role="button">Apply Now</a>
				</div>
			</div>
			<div class="row cource-list-agile pt-4">
				<div class="col-lg-7 agile-course-main">
					<div class="w3ls-cource-first">
						<img src="images/1.png" alt="" class="img-fluid img-poiscour mx-auto d-block mt-2"></img>
						<div class="px-md-5 px-4  pb-md-5 pb-4">
							<h3 class="text-dark">Independent Study Korean</h3>
							<p class="mt-3 mb-4 pr-lg-5">accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.</p>
							<ul class="list-unstyled text-capitalize">
								<li>
									<i class="fas fa-calendar-alt mr-3"></i>may - aug 2018</li>
								<li class="my-3">
									<i class="fas fa-clock mr-3"></i>4 - 6 hours</li>
								<li>
									<i class="fas fa-users mr-3"></i>70 seats</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="col-lg-5 agile-course-main-2 mt-4">
					<img src="images/n2.jpg" alt="" class="img-fluid"/>
				</div>
				<div class="buttons-w3ls">
					<a class="btn button-cour-w3ls text-white" href="course_details.html" role="button">Learn More</a>
					<a class="btn bg-dark text-white" href="form.html" role="button">Apply Now</a>
				</div>
			</div>
			<div class="row cource-list-agile cource-list-agile-2">
				<div class="col-lg-5 agile-course-main-3 mt-4">
					<img src="images/n3.jpg" alt="" class="img-fluid"/>
				</div>
				<div class="col-lg-7 agile-course-main text-right">
					<div class="w3ls-cource-first">
						<img src="images/2.png" alt="" class="img-fluid img-poiscour mx-auto d-block mt-2"></img>
						<div class="px-md-5 px-4  pb-md-5 pb-4">
							<h3 class="text-dark">Intermediate Language Korean</h3>
							<p class="mt-3 mb-4 pl-lg-4">accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.</p>
							<ul class="list-unstyled text-capitalize">
								<li>june - aug 2018
									<i class="fas fa-calendar-alt ml-3"></i>
								</li>
								<li class="my-3">3 - 6 hours
									<i class="fas fa-clock ml-3"></i>
								</li>
								<li>60 seats
									<i class="fas fa-users ml-3"></i>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="buttons-w3ls-2">
					<a class="btn button-cour-w3ls text-white" href="course_details.html" role="button">Learn More</a>
					<a class="btn bg-dark text-white" href="form.html" role="button">Apply Now</a>
				</div>
			</div>
		</div>
	</div>
	{/* <!-- //course--> */}

	{/* <!-- Stats--> */}
	<div class="stats-w3layouts py-5">
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
	</div>
	{/* <!-- //Stats --> */}

	{/* <!-- course--> */}
	<div class="classes py-5">
		<div class="container py-xl-5 py-lg-3">
			<h3 class="title text-capitalize font-weight-light text-dark text-center mb-sm-5 mb-4">choose your
				<span class="font-weight-bold">course</span>
			</h3>
			<div class="row pt-4">
				<div class="col-lg-4 col-news-top text-center">
					{/* <!-- Left to right --> */}
					{/* <!-- normal --> */}
					<div class="ih-item circle effect16 left_to_right mx-auto">
						<a href="language.html">
							<div class="img">
								<img src="images/c1.jpg" alt="img" class="img-fluid rounded-circle"/>
							</div>
							<div class="info">
								<h3 class="text-capitalize text-white">language</h3>
								<p>Description goes here</p>
							</div>
						</a>
					</div>
					<h6 class="small-heading text-capitalize text-center mt-4">
						<a href="language.html" class="text-dark">language
							<i class="fas fa-long-arrow-alt-right ml-1"></i>
						</a>
					</h6>
					{/* <!-- end normal --> */}
					{/* <!-- end Left to right --> */}
				</div>
				<div class="col-lg-4 col-news-top text-center my-lg-0 my-sm-5 my-4">
					{/* <!-- Left to right --> */}
					{/* <!-- normal --> */}
					<div class="ih-item circle effect16 left_to_right mx-auto">
						<a href="communication.html">
							<div class="img">
								<img src="images/c2.jpg" alt="img" class="img-fluid rounded-circle"/>
							</div>
							<div class="info">
								<h3 class="text-capitalize text-white">communication</h3>
								<p>Description goes here</p>
							</div>
						</a>
					</div>
					<h6 class="small-heading text-capitalize text-center mt-4">
						<a href="communication.html" class="text-dark">communication
							<i class="fas fa-long-arrow-alt-right ml-1"></i>
						</a>
					</h6>
					{/* <!-- end normal --> */}
					{/* <!-- end Left to right --> */}
				</div>
				<div class="col-lg-4 col-news-top text-center">
					{/* <!-- Left to right --> */}
					{/* <!-- normal --> */}
					<div class="ih-item circle effect16 left_to_right mx-auto">
						<a href="business.html">
							<div class="img">
								<img src="images/c3.jpg" alt="img" class="img-fluid rounded-circle"/>
							</div>
							<div class="info">
								<h3 class="text-capitalize text-white">business</h3>
								<p>Description goes here</p>
							</div>
						</a>
					</div>
					<h6 class="small-heading text-capitalize text-center mt-4">
						<a href="business.html" class="text-dark">business
							<i class="fas fa-long-arrow-alt-right ml-1"></i>
						</a>
					</h6>
					{/* <!-- end normal --> */}
					{/* <!-- end Left to right --> */}
				</div>
			</div>
			<div class="row mt-5">
				<div class="col-lg-4 col-news-top text-center">
					{/* <!-- Left to right --> */}
					{/* <!-- normal --> */}
					<div class="ih-item circle effect16 left_to_right mx-auto">
						<a href="software.html">
							<div class="img">
								<img src="images/c4.jpg" alt="img" class="img-fluid rounded-circle"/>
							</div>
							<div class="info">
								<h3 class="text-capitalize text-white">software</h3>
								<p>Description goes here</p>
							</div>
						</a>
					</div>
					<h6 class="small-heading text-capitalize text-center mt-4">
						<a href="software.html" class="text-dark">software
							<i class="fas fa-long-arrow-alt-right ml-1"></i>
						</a>
					</h6>
					{/* <!-- end normal --> */}
					{/* <!-- end Left to right --> */}
				</div>
				<div class="col-lg-4 col-news-top text-center  my-lg-0 my-sm-5 my-4">
					{/* <!-- Left to right --> */}
					{/* <!-- normal --> */}
					<div class="ih-item circle effect16 left_to_right mx-auto">
						<a href="social_media.html">
							<div class="img">
								<img src="images/c6.jpg" alt="img" class="img-fluid rounded-circle"/>
							</div>
							<div class="info">
								<h3 class="text-capitalize text-white">social media </h3>
								<p>Description goes here</p>
							</div>
						</a>
					</div>
					<h6 class="small-heading text-capitalize text-center mt-4">
						<a href="social_media.html" class="text-dark">social media
							<i class="fas fa-long-arrow-alt-right ml-1"></i>
						</a>
					</h6>
					{/* <!-- end normal --> */}
					{/* <!-- end Left to right --> */}
				</div>
				<div class="col-lg-4 col-news-top text-center">
					{/* <!-- Left to right --> */}
					{/* <!-- normal --> */}
					<div class="ih-item circle effect16 left_to_right mx-auto">
						<a href="photography.html">
							<div class="img">
								<img src="images/c5.jpg" alt="img" class="img-fluid rounded-circle"/>
							</div>
							<div class="info">
								<h3 class="text-capitalize text-white">photography </h3>
								<p>Description goes here</p>
							</div>
						</a>
					</div>
					<h6 class="small-heading text-capitalize text-center mt-4">
						<a href="photography.html" class="text-dark">photography
							<i class="fas fa-long-arrow-alt-right ml-1"></i>
						</a>
					</h6>
					{/* <!-- end normal --> */}
					{/* <!-- end Left to right --> */}
				</div>
			</div>
		</div>
	</div>
	{/* <!-- //course --> */}

			</div>

		)

	}

}

export default Header