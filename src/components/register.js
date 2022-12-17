import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class withdraw extends Component {

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
				<a href="index.html">Home</a>
			</li>
			<li class="breadcrumb-item active" aria-current="page">Register Form</li>
		</ol>
	</nav>
	{/* <!-- breadcrumb --> */}
	{/* <!-- //banner --> */}

	{/* <!-- register --> */}
	<div class="login-w3ls py-5">
		<div class="container py-xl-5 py-lg-3">
			<h3 class="title text-capitalize font-weight-light text-dark text-center mb-5">register
				<span class="font-weight-bold">now</span>
			</h3>
			{/* <!-- content --> */}
			<div class="sub-main-w3 pt-md-4">
				<form action="#" method="post">
					<div class="form-style-agile form-group">
						<label>
							Your Name
							<i class="fas fa-user"></i>
						</label>
						<input placeholder="Your Name" class="form-control" name="Name" type="text" required=""/>
					</div>
					<div class="form-style-agile form-group">
						<label>
							Email
							<i class="fas fa-envelope"></i>
						</label>
						<input placeholder="Email" class="form-control" name="Email" type="email" required=""/>
					</div>
					<div class="form-style-agile form-group">
						<label>
							Password
							<i class="fas fa-unlock-alt"></i>
						</label>
						<input placeholder="Password" class="form-control" name="Password" id="password1" type="password" required=""/>
					</div>
					<div class="form-style-agile form-group">
						<label>
							Confirm Password
							<i class="fas fa-unlock-alt"></i>
						</label>
						<input placeholder="Confirm Password" class="form-control" name="Confirm Password" id="password2" type="password" required=""/>
					</div>
					{/* <!-- switch --> */}
					<ul class="list-unstyled list-login">
						<li class="switch-agileits float-left">
							<label class="switch  text-capitalize">
								<input type="checkbox"/>
								<span class="slider-switch slider-switch-2 round"></span>
								I Accept to the Terms & Conditions
							</label>
						</li>
					</ul>
					{/* <!-- //switch --> */}
					<input type="submit" value="Register"/>
				</form>
			</div>
			{/* <!-- //content --> */}
		</div>
	</div>
	{/* <!-- //register --> */}

		


			</div>


		)

	}

}


export default withdraw