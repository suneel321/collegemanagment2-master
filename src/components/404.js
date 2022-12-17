import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class account_detail extends Component {

	render() {

		return (
			<div>
				
	
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









	{/* <!-- 404 error page --> */}
	<div class="w3-main-error py-5">
		<div class="container py-xl-5 py-lg-3">
			<h3 class="title text-capitalize font-weight-light text-dark text-center mb-5">404
				<span class="font-weight-bold">error</span> page
			</h3>
			<div class="agile-info text-center">
				<h3>404</h3>
				<h4 class="font-weight-light">oops!</h4>
				<p class="mt-2 mb-sm-5 mb-3">sorry,page not found.</p>
				<button href="#" class="w3ls-button2 btn text-white mt-md-4 mt-2">Go Back</button>
			</div>
		</div>
	</div>
	{/* <!-- //404 error page --> */}

			</div>
		)

	}

}


export default account_detail