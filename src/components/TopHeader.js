import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'


class TopHeader extends Component {


	render() {

		return (
			<div>
				{/* <!-- header --> */}
				<header>
					{/* <!-- top header --> */}
					<div class="top-head-w3ls py-2 bg-dark">
						<div class="container">
							<div class="row">
								<h1 class="text-capitalize text-white col-7">
									<i class="fas fa-book text-dark bg-white p-2 rounded-circle mr-3"></i>welcome to edulearn</h1>
								{/* <!-- social icons --> */}
								<div class="social-icons text-right col-5">
									<ul class="list-unstyled">
										<li>
											<Link to="#" class="fab fa-facebook-f icon-border facebook rounded-circle"> </Link>
										</li>
										<li class="mx-2">
											<Link to="#" class="fab fa-twitter icon-border twitter rounded-circle"> </Link>
										</li>
										<li>
											<Link to="#" class="fab fa-google-plus-g icon-border googleplus rounded-circle"> </Link>
										</li>
										<li class="ml-2">
											<Link to="#" class="fas fa-rss icon-border rss rounded-circle"> </Link>
										</li>
									</ul>
								</div>
								{/* <!-- //social icons --> */}
							</div>
						</div>
					</div>
					{/* <!-- //top header --> */}
					{/* <!-- middle header --> */}
					<div class="middle-w3ls-nav py-2">
						<div class="container">
							<div class="row">
								<Link class="logo font-italic font-weight-bold col-lg-4 text-lg-left text-center" to="index.html">Edulearn</Link>
								<div class="col-lg-8 right-info-agiles mt-lg-0 mt-sm-3 mt-1">
									<div class="row">
										<div class="col-sm-4 nav-middle">
											<i class="far fa-envelope-open text-center mr-md-4 mr-sm-2 mr-4"></i>
											<div class="agile-addresmk">
												<p>
													<span class="font-weight-bold text-dark">Mail Us</span>
													<Link to="mailto:mail@example.com">info@example.com</Link>
												</p>
											</div>
										</div>
										<div class="col-sm-4 col-6 nav-middle mt-sm-0 mt-2">
											<i class="fas fa-phone-volume text-center mr-md-4 mr-sm-2 mr-4"></i>
											<div class="agile-addresmk">
												<p>
													<span class="font-weight-bold text-dark">Call Us</span>
													+1234-567-890
									</p>
											</div>
										</div>
										<div class="col-sm-4 col-6 top-login-butt text-right mt-sm-2">
											<Link to="login" class="button-head-mow3 text-white">Login</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- //middle header --> */}
				</header>
				{/* <!-- //header --> */}

			</div>

		)

	}

}

export default withRouter(TopHeader) 