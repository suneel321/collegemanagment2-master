import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import pagenotfound from './components/404'
import pages from './components/pages'
import Blog from './components/blog'
import courses from './components/projects'
import faq from './components/forget'
import contactUs from './components/contactUs';
import gallery from './components/services'
import login from './components/login';
import aboutUs from './components/aboutUs';
import Home from './components/home';
import form from './components/time';
import register from './components/register';

import course_details from './components/createaccount'


// waqas

import TopHeader from './components/TopHeader'
import Footer from './components/footer'

class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <div>
          {/* <TopHeader /> */}
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/contactUs" component={contactUs} />
            <Route path="/about" component={aboutUs} />
            <Route path="/Blog" component={Blog} />
            <Route path="/courses" component={courses} />
            <Route path="/coursedetails" component={course_details} />
            <Route path="/login" component={login} />
            <Route path="/faq" component={faq} />
            <Route path="/pages" component={pages} />
            <Route path="/gallery" component={gallery} />
            <Route path="/form" component={form} />
            <Route path="/register" component={register} />

            <Route exact path="/" component={Home} />
            <Route path="/" component={pagenotfound} />
          </Switch>
          <Footer />
        </div>

      </BrowserRouter>
    );

  }

}

export default App;
