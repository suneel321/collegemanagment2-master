import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Test extends Component {



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









	{/* <!-- single --> */}
	<div class="single-w3l py-5">
		<div class="container py-xl-5 py-lg-3">
			<h3 class="title text-capitalize font-weight-light text-dark text-center mb-5">single
				<span class="font-weight-bold">page</span>
			</h3>
			<div class="row inner_sec_info pt-md-4">
				{/* <!-- left side --> */}
				<div class="col-lg-8 single-left">
					<div class="single-left1">
						<img src="images/banner3.jpg" alt=" " class="img-fluid" />
						<h6 class="blog-first text-dark text-center my-4">
							<i class="far fa-user mr-2"></i>Jenny Joy
						</h6>
						<ul class="blog_list my-3 text-center">
							<li>June 02, 2018</li>
							<li class="mx-3">
								<a href="#">
									<i class="far fa-heart mr-1"></i>
									22</a>
							</li>
							<li>
								<a href="#">
									<i class="far fa-comments mr-1"></i>
									16</a>
							</li>
						</ul>
						<h5 class="card-title">
							<a href="single.html" class="text-dark">Sed ut perspiciatis unde omnis iste natus error sit facilisis erat posuere erat</a>
						</h5>
						<p>In consectetur, elit in scelerisque malesuada, tellus leo viverra massa, nec malesuada turpis lectus ac urna. Suspendisse
							ut neque orci. Phasellus tellus diam, pulvinar sit amet elit sit amet, fermentum viverra eros. Praesent neque purus,
							rhoncus nec nibh non, mollis sodales odio. Nullam facilisis diam non magna porta luctus. Aenean facilisis erat posuere
							erat ornare ultrices. Aliquam ac arcu interdum, dapibus nibh convallis, semper augue.
							<i class="my-3 font-weight-bold">Nunc a urna turpis. Aenean vestibulum elementum nisi. Aenean aliquet nec mi et lacinia. Aliquam maximus iaculis mi
								elit in scelerisque malesuada, tellus leo viverra massa, sed efficitur orci efficitur nec.</i> In consectetur, elit
							in scelerisque malesuada, tellus leo viverra massa, nec malesuada turpis lectus ac urna. Suspendisse ut neque orci.
							Phasellus tellus diam, pulvinar sit amet elit sit amet, fermentum viverra eros. Praesent neque purus, rhoncus nec
							nibh non, mollis sodales odio.</p>
					</div>
					<div class="admin p-4 my-4">
						<p>
							<i class="fas fa-quote-left mr-2"></i>nibh eu consequat magna ipsum ac ex. Nulla iaculis tincidunt elit, tortor luctus sit amet. Morbi in porta dolor.
							Morbi eget dui elit. consequat magna ipsum ac ex, Nulla iaculis consequat magna ipsum ac ex Nulla iaculis.
							<i class="fas fa-quote-right ml-2"></i>
						</p>
						<a href="#" class="mt-3 font-weight-bold text-right blockquote-footer">James Doe</a>
					</div>
					<div class="row single-left2">
						<div class="col-md-6 single-left2-left">
							<ul>
								<li class="mt-3">
									<i class="fas fa-check mr-2"></i>
									<a href="single.html">At vero eos et accusamus iusto</a>
								</li>
								<li class="mt-3">
									<i class="fas fa-check mr-2"></i>
									<a href="single.html">Sed ut perspiciatis unde omnis</a>
								</li>
								<li class="mt-3">
									<i class="fas fa-check mr-2"></i>
									<a href="single.html">Accusantium doloremque lauda</a>
								</li>
								<li class="mt-3">
									<i class="fas fa-check mr-2"></i>
									<a href="single.html">Vel illum qui dolorem fugiat quo</a>
								</li>
								<li class="mt-3">
									<i class="fas fa-check mr-2"></i>
									<a href="single.html">Quis autem vel eum repreh</a>
								</li>
								<li class="mt-3">
									<i class="fas fa-check mr-2"></i>
									<a href="single.html">Neque porro quisquam est qui</a>
								</li>
							</ul>
						</div>
						<div class="col-md-6 single-left2-left">
							<ul>
								<li class="mt-3">
									<i class="fas fa-check mr-2"></i>
									<a href="single.html">At vero eos et accusamus iusto</a>
								</li>
								<li class="mt-3">
									<i class="fas fa-check mr-2"></i>
									<a href="single.html">Sed ut perspiciatis unde omnis</a>
								</li>
								<li class="mt-3">
									<i class="fas fa-check mr-2"></i>
									<a href="single.html">Accusantium doloremque lauda</a>
								</li>
								<li class="mt-3">
									<i class="fas fa-check mr-2"></i>
									<a href="single.html">Vel illum qui dolorem fugiat quo</a>
								</li>
								<li class="mt-3">
									<i class="fas fa-check mr-2"></i>
									<a href="single.html">Quis autem vel eum repreh</a>
								</li>
								<li class="mt-3">
									<i class="fas fa-check mr-2"></i>
									<a href="single.html">Neque porro quisquam est qui</a>
								</li>
							</ul>
						</div>
					</div>
					<div class="comments my-5">
						<h3 class="blog-title text-dark">Our Recent Comments</h3>
						<div class="comments-grids mt-4">
							<div class="row comments-grid">
								<div class="col-3 comments-grid-left">
									<img src="images/t1.jpg" alt=" " class="img-thumbnail rounded-circle" />
								</div>
								<div class="col-8 comments-grid-right mt-3">
									<h4>Parker Moe</h4>
									<ul class="my-2">
										<li class="font-weight-bold">6 June 2018
											<i>|</i>
										</li>
										<li>
											<a href="#" class="font-weight-bold">Reply</a>
										</li>
									</ul>
									<p>mattis ut hendrerit non, facilisis eget mauris. Sed ultricies nec purus quis tempor. Phasellus bibendum eu.</p>
								</div>
							</div>
							<div class="row comments-grid my-4">
								<div class="col-3 comments-grid-left">
									<img src="images/t2.jpg" alt=" " class="img-thumbnail rounded-circle" />
								</div>
								<div class="col-8 comments-grid-right mt-3">
									<h4>Mary Jane</h4>
									<ul class="my-2">
										<li class="font-weight-bold">16 May 2018
											<i>|</i>
										</li>
										<li>
											<a href="#" class="font-weight-bold">Reply</a>
										</li>
									</ul>
									<p>mattis ut hendrerit non, facilisis eget mauris. Sed ultricies nec purus quis tempor. Phasellus bibendum eu.</p>
								</div>
							</div>
							<div class="row comments-grid">
								<div class="col-3 comments-grid-left">
									<img src="images/t3.jpg" alt=" " class="img-thumbnail rounded-circle" />
								</div>
								<div class="col-8 comments-grid-right mt-3">
									<h4>Michael Loe</h4>
									<ul class="my-2">
										<li class="font-weight-bold">16 June 2018
											<i>|</i>
										</li>
										<li>
											<a href="#" class="font-weight-bold">Reply</a>
										</li>
									</ul>
									<p>mattis ut hendrerit non, facilisis eget mauris. Sed ultricies nec purus quis tempor. Phasellus bibendum eu.</p>
								</div>
							</div>
						</div>
					</div>
					<div class="leave-coment-form">
						<h3 class="blog-title text-dark mb-4">Leave a Reply</h3>
						<form action="#" method="post">
							<div class="row">
								<div class="col-sm-6 form-group">
									<input type="text" name="Name" class="form-control" placeholder="Name" required=""/>
								</div>
								<div class="col-sm-6 form-group">
									<input type="email" name="Email" class="form-control" placeholder="Email" required=""/>
								</div>
							</div>
							<div class="form-group">
								<textarea name="Message" class="form-control" placeholder="Your comment here..." required=""></textarea>
							</div>
							<div class="mm_single_submit">
								<input type="submit" value="Post Comment"/>
							</div>
						</form>
					</div>
				</div>
				{/* <!-- //left side --> */}
				{/* <!-- right side --> */}
				<div class="col-lg-4 event-right mt-lg-0 mt-sm-5 mt-4">
					<div class="event-right1">
						<div class="search1">
							<form class="form-inline" action="#" method="post">
								<input class="form-control rounded-0 mr-sm-2" type="search" placeholder="Search Here" aria-label="Search" required />
								<button class="btn bg-dark text-white rounded-0 mt-3" type="submit">Search</button>
							</form>
						</div>
						<div class="categories my-4 p-4 border">
							<h3 class="blog-title text-dark">Categories</h3>
							<ul>
								<li class="mt-3">
									<i class="fas fa-check mr-2"></i>
									<a href="single.html">At vero eos et accusamus iusto</a>
								</li>
								<li class="mt-3">
									<i class="fas fa-check mr-2"></i>
									<a href="single.html">Sed ut perspiciatis unde omnis</a>
								</li>
								<li class="mt-3">
									<i class="fas fa-check mr-2"></i>
									<a href="single.html">Accusantium doloremque lauda</a>
								</li>
								<li class="mt-3">
									<i class="fas fa-check mr-2"></i>
									<a href="single.html">Vel illum qui dolorem fugiat quo</a>
								</li>
								<li class="mt-3">
									<i class="fas fa-check mr-2"></i>
									<a href="single.html">Quis autem vel eum repreh</a>
								</li>
								<li class="mt-3">
									<i class="fas fa-check mr-2"></i>
									<a href="single.html">Neque porro quisquam est qui</a>
								</li>
							</ul>
						</div>
						<div class="posts p-4 border">
							<h3 class="blog-title text-dark">Our Events</h3>
							<div class="posts-grids">
								<div class="row posts-grid mt-4">
									<div class="col-lg-4 col-md-3 col-4 posts-grid-left pr-0">
										<a href="single.html">
											<img src="images/c1.jpg" alt=" " class="img-fluid" />
										</a>
									</div>
									<div class="col-lg-8 col-md-7 col-8 posts-grid-right mt-lg-0 mt-md-5 mt-sm-4">
										<h4>
											<a href="single.html" class="text-dark">Sed ut perspiciatis unde omni</a>
										</h4>
										<ul class="wthree_blog_events_list mt-2">
											<li class="mr-2 text-dark">
												<i class="fa fa-calendar mr-2" aria-hidden="true"></i>15/05/18</li>
											<li>
												<i class="fa fa-user" aria-hidden="true"></i>
												<a href="single.html" class="text-dark ml-2">Admin</a>
											</li>
										</ul>
									</div>
								</div>
								<div class="row posts-grid mt-4">
									<div class="col-lg-4 col-md-3 col-4 posts-grid-left pr-0">
										<a href="single.html">
											<img src="images/c2.jpg" alt=" " class="img-fluid" />
										</a>
									</div>
									<div class="col-lg-8 col-md-7 col-8 posts-grid-right mt-lg-0 mt-md-5 mt-sm-4">
										<h4>
											<a href="single.html" class="text-dark">Sed ut perspiciatis unde omni</a>
										</h4>
										<ul class="wthree_blog_events_list mt-2">
											<li class="mr-2 text-dark">
												<i class="fa fa-calendar mr-2" aria-hidden="true"></i>23/05/18</li>
											<li>
												<i class="fa fa-user" aria-hidden="true"></i>
												<a href="single.html" class="text-dark ml-2">Admin</a>
											</li>
										</ul>
									</div>
								</div>
								<div class="row posts-grid mt-4">
									<div class="col-lg-4 col-md-3 col-4 posts-grid-left pr-0">
										<a href="single.html">
											<img src="images/c3.jpg" alt=" " class="img-fluid" />
										</a>
									</div>
									<div class="col-lg-8 col-md-7 col-8 posts-grid-right mt-lg-0 mt-md-5 mt-sm-4">
										<h4>
											<a href="single.html" class="text-dark">Sed ut perspiciatis unde omni</a>
										</h4>
										<ul class="wthree_blog_events_list mt-2">
											<li class="mr-2 text-dark">
												<i class="fa fa-calendar mr-2" aria-hidden="true"></i>13/06/18</li>
											<li>
												<i class="fa fa-user" aria-hidden="true"></i>
												<a href="single.html" class="text-dark ml-2">Admin</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div class="tags mt-4 p-4 border">
							<h3 class="blog-title text-dark">Recent Tags</h3>
							<ul class="mt-4">
								<li>
									<a href="course_details.html" class="text-dark border">Designs</a>
								</li>
								<li>
									<a href="course_details.html" class="text-dark border">Growth</a>
								</li>
								<li>
									<a href="course_details.html" class="text-dark border">Latest</a>
								</li>
								<li>
									<a href="course_details.html" class="text-dark border">Price</a>
								</li>
								<li>
									<a href="course_details.html" class="text-dark border">Tools</a>
								</li>
								<li>
									<a href="course_details.html" class="text-dark border">Business</a>
								</li>
								<li>
									<a href="course_details.html" class="text-dark border">Work Space</a>
								</li>
								<li>
									<a href="course_details.html" class="text-dark border">New Course</a>
								</li>
								<li>
									<a href="course_details.html" class="text-dark border">Advantage</a>
								</li>
								<li>
									<a href="course_details.html" class="text-dark border">Concepts</a>
								</li>
								<li>
									<a href="course_details.html" class="text-dark border">Arts</a>
								</li>
								<li>
									<a href="course_details.html" class="text-dark border">Photography</a>
								</li>
								<li>
									<a href="course_details.html" class="text-dark border">Research</a>
								</li>
								<li>
									<a href="course_details.html" class="text-dark border">Software</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				{/* <!-- //right side --> */}
			</div>
		</div>
	</div>
	{/* <!-- //blog --> */}

      </div>

    )

  }

}
export default Test