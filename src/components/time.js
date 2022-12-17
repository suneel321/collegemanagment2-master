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
							<Link to="home">Home</Link>
						</li>
						<li class="breadcrumb-item active" aria-current="page">Contact Us</li>
					</ol>
				</nav>
				{/* <!-- breadcrumb --> */}
				{/* <!-- //banner --> */}



				{/* <!-- //banner --> */}





	{/* <!-- admission form --> */}
	<div class="form-w3l py-5">
		<div class="container py-xl-5 py-lg-3">
			<h3 class="title text-capitalize font-weight-light text-dark text-center mb-5">Admission
				<span class="font-weight-bold">form</span>
			</h3>
			<div class="register-form pt-md-4">
				<form action="#" method="post">
					<div class="styled-input form-group">
						<input type="text" class="form-control" placeholder="Your Name" name="Your name" required="" />
					</div>
					<div class="styled-input form-group">
						<input id="datepicker" class="form-control" placeholder="Birth Date" name="Text" type="text" value="" onfocus="this.value = '';"
						 onblur="if (this.value == '') {this.value = 'mm/dd/yyyy';}" required="" />
					</div>
					<div class="styled-input agile-styled-input-top form-group">
						<select class="category2" required="">
							<option value="">Gender</option>
							<option value="">Female</option>
							<option value="">Male</option>
							<option value="">Other</option>
						</select>
					</div>
					<div class="styled-input form-group">
						<input type="email" class="form-control" placeholder="Your E-mail" name="Email" required=""/>
					</div>
					<div class="styled-input form-group">
						<input type="text" class="form-control" placeholder="Phone Number" name="Phone" required=""/>
					</div>
					<div class="styled-input agile-styled-input-top form-group">
						<select class="category2" required="">
							<option value="">Select Course</option>
							<option value="">Language</option>
							<option value="">Communication</option>
							<option value="">Business</option>
							<option value="">Software</option>
							<option value="">Social Media</option>
							<option value="">Photography</option>
							<option value="">Web Designing</option>
							<option value="">Web Technology </option>
							<option value="">PC Systems </option>
							<option value="">IT Foundations </option>
							<option value="">HR Management </option>
							<option value="">Modeling </option>
							<option value="">Basic Marketing</option>
						</select>
						<span></span>
					</div>
					<div class="styled-input form-group">
						<div class="agileits_w3layouts_grid">
							<select class="category2" name="category1" required="">
								<option value="">Select Course Time</option>
								<option value="">Hours: 8am - 10am</option>
								<option value="">Hours: 10am - 12pm</option>
								<option value="">Hours: 12pm - 4pm</option>
								<option value="">Hours: 4pm - 7pm</option>
								<option value="">Hours: 7pm - 9pm</option>
							</select>
						</div>
					</div>
					<div class="styled-input">
						<label class="header-admin-form font-weight-bold text-dark my-3">Your Address</label>
						<div class="form-group">
							<input type="text" name="name" class="form-control" placeholder="Address" title="Please enter your Address" required=""/>
						</div>
						<div class="form-group">
							<input type="text" name="name" class="form-control" placeholder="Line" title="Please enter your Line" required=""/>
						</div>
						<div class="form-group">
							<input type="text" name="name" class="form-control" placeholder="City" title="Please enter your City" required=""/>
						</div>
						<div class="form-group">
							<input type="text" name="name" class="form-control" placeholder="Zip Code" title="Please enter your Zip code" required=""/>
						</div>
					</div>
					<input type="submit" value="Submit"/>
				</form>
			</div>
		</div>
	</div>
	{/* <!-- admission form --> */}


			</div>


		)

	}

}


export default withdraw