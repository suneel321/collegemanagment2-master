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










	{/* <!-- faqs --> */}
	<div class="faq-w3l py-5">
		<div class="container py-xl-5 py-lg-3">
			<h3 class="title text-capitalize font-weight-light text-dark text-center mb-5">faqs
				<span class="font-weight-bold"></span>
			</h3>
			<div class="faq-info pt-md-4">
				<h3 class="w3-head text-dark">Top 10 Frequently asked questions</h3>
				<div class="faq-w3agile">
					<ul class="faq pl-sm-4 pl-3">
						<li class="item1 mt-sm-4 mt-3 pl-2">
							<a href="#" title="click here">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor vehicula ipsum nec ?</a>
							<ul>
								<li class="subitem1 mt-3">
									<p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.
										At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
										corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
								</li>
							</ul>
						</li>
						<li class="item2 mt-sm-4 mt-3 pl-2">
							<a href="#" title="click here">The standard Lorem Ipsum passage Etiam faucibus viverra libero vel efficitur. Ut semper nisl ut laoreet ultrices ?</a>
							<ul>
								<li class="subitem1 mt-3">
									<p> Tincidunt ut laoreet dolore At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
										nibh euismod consectetuer adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos ducimus
										qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
										cupiditate non provident.</p>
								</li>
							</ul>
						</li>
						<li class="item3 mt-sm-4 mt-3 pl-2">
							<a href="#" title="click here">Consectetuer adipiscing elit Etiam faucibus viverra libero vel efficitur. Ut semper nisl ut laoreet ultrices?</a>
							<ul>
								<li class="subitem1 mt-3">
									<p>Dincidunt ut laoreet dolore At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
										nibh euismod consectetuer adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos ducimus
										qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
										cupiditate non provident.</p>
								</li>
							</ul>
						</li>
						<li class="item4 mt-sm-4 mt-3 pl-2">
							<a href="#" title="click here">Sed diam nonummy nibh euismod Etiam faucibus viverra libero vel efficitur. Ut semper nisl ut laoreet ultrices?</a>
							<ul>
								<li class="subitem1 mt-3">
									<p>At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod consectetuer
										adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
										voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
								</li>
							</ul>
						</li>
						<li class="item5 mt-sm-4 mt-3 pl-2">
							<a href="#" title="click here">Euismod tincidunt laoreet Etiam faucibus viverra libero vel efficitur ?</a>
							<ul>
								<li class="subitem1 mt-3">
									<p>At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod consectetuer
										adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
										voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
								</li>
							</ul>
						</li>
						<li class="item6 mt-sm-4 mt-3 pl-2">
							<a href="#" title="click here">Voluptas sit aspernatur aut Ut semper nisl ut laoreet ultrices ?</a>
							<ul>
								<li class="subitem1 mt-3">
									<p>At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod consectetuer
										adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
										voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
								</li>
							</ul>
						</li>
						<li class="item7 mt-sm-4 mt-3 pl-2">
							<a href="#" title="click here">Donec ut quam ligula feugiat Ut semper nisl ut laoreet ultrices ?</a>
							<ul>
								<li class="subitem1 mt-3">
									<p>At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod consectetuer
										adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
										voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
								</li>
							</ul>
						</li>
						<li class="item8 mt-sm-4 mt-3 pl-2">
							<a href="#" title="click here">The standard Lorem Ipsum Ut semper nisl ut laoreet ultrices passage ?</a>
							<ul>
								<li class="subitem1 mt-3">
									<p>Lorem ipsum dolor sit amet At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
										nibh euismod consectetuer adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos ducimus
										qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
										cupiditate non provident.</p>
								</li>
							</ul>
						</li>
						<li class="item9 mt-sm-4 mt-3 pl-2">
							<a href="#" title="click here">Consectetuer adipiscing Ut semper nisl ut laoreet ultrices elit ?</a>
							<ul>
								<li class="subitem1 mt-3">
									<p>Lorem ipsum dolor sit amet At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
										nibh euismod consectetuer adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos ducimus
										qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
										cupiditate non provident.</p>
								</li>
							</ul>
						</li>
						<li class="item10 mt-sm-4 mt-3 pl-2">
							<a href="#" title="click here">Sed diam nonummy Ut semper nisl ut laoreet ultrices nibh euismod ?</a>
							<ul>
								<li class="subitem1 mt-3">
									<p>Consectetuer adipiscing elit, sed diam nonummy nibh euismod consectetuer adipiscing elit, sed diam nonummy nibh
										euismod accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
										quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	{/* <!-- //faqs --> */}

			</div>


		)

	}

}


export default withdraw