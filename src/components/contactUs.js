import React, { Component } from 'react';
import { Link } from 'react-router-dom';



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

				{/* <!-- contact --> */}
				<div class="contact py-5">
					<div class="container py-xl-5 py-lg-3">
						<h3 class="title text-capitalize font-weight-light text-dark text-center mb-5">contact
				<span class="font-weight-bold">us</span>
						</h3>
						<div class="row contact-grids agile-1 py-sm-5 pb-sm-0 pb-5">
							<div class="col-sm-4 contact-grid agileinfo-6 mt-sm-0 mt-2">
								<div class="contact-grid1 text-center">
									<div class="con-ic">
										<i class="fas fa-map-marker-alt rounded-circle"></i>
									</div>
									<h4 class="font-weight-bold mt-sm-4 mt-3 mb-3">Address</h4>
									<p>1PO Box 8568954 California,
							<label>USA.</label>
									</p>
								</div>
							</div>
							<div class="col-sm-4 contact-grid agileinfo-6 my-sm-0 my-4">
								<div class="contact-grid1 text-center">
									<div class="con-ic">
										<i class="fas fa-phone rounded-circle"></i>
									</div>
									<h4 class="font-weight-bold mt-sm-4 mt-3 mb-3">Call Us</h4>
									<p>+(0121) 121 121
							<label>+(0121) 121 122</label>
									</p>
								</div>
							</div>
							<div class="col-sm-4 contact-grid agileinfo-6">
								<div class="contact-grid1 text-center">
									<div class="con-ic">
										<i class="fas fa-envelope-open rounded-circle"></i>
									</div>
									<h4 class="font-weight-bold mt-sm-4 mt-3 mb-3">Email</h4>
									<p>
										<Link to="mailto:info@example.com">info@example1.com</Link>
										<label>
											<Link to="mailto:info@example.com">info@example2.com</Link>
										</label>
									</p>
								</div>
							</div>
						</div>
						{/* <!-- form --> */}
						<form action="#" method="post">
							<div class="contact-grids1 w3agile-6">
								<div class="row">
									<div class="col-md-6 col-sm-6 contact-form1 form-group">
										<label class="col-form-label">First Name</label>
										<input type="text" class="form-control" name="First Name" placeholder="" required="" />
									</div>
									<div class="col-md-6 col-sm-6 contact-form1 form-group">
										<label class="col-form-label">Last Name</label>
										<input type="text" class="form-control" name="Last Name" placeholder="" required="" />
									</div>
								</div>
								<div class="row">
									<div class="col-md-6 col-sm-6 contact-form1 form-group">
										<label class="col-form-label">Subject</label>
										<input type="text" class="form-control" name="Subject" placeholder="" required="" />
									</div>
									<div class="col-md-6 col-sm-6 contact-form1 form-group">
										<label class="col-form-label">E-mail</label>
										<input type="email" class="form-control" name="Email" placeholder="" required="" />
									</div>
								</div>
								<div class="contact-me animated wow slideInUp form-group">
									<label class="col-form-label">Message</label>
									<textarea name="Message" class="form-control" placeholder="" required=""> </textarea>
								</div>
								<div class="contact-form">
									<input type="submit" value="Submit" />
								</div>
							</div>
						</form>
						{/* <!-- //form --> */}
					</div>
				</div>
				{/* <!-- //contact --> */}


			</div>
		)

	}

}


export default withdraw