// src/App.tsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './css/style.css';

function App() {
  return (
    <div className="App">
      <div className="navbar navbar-default navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="index.html">INSTANT</a>
          </div>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About</a></li>
              <li className="active"><a href="works.html" className="smoothscroll">Works</a></li>
              <li><a href="contact.html" className="smoothscroll">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div id="workwrap">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-lg-offset-3">
              <h4>NEW WEBSITE FOR</h4>
              <h1>INSTANT</h1>
              <h4>ROLE: LEAD DESIGNER</h4>
            </div>
          </div>
        </div>
      </div>

      <section id="works"></section>
      <div className="container">
        <div className="row centered mt mb">
          <div className="col-lg-8 col-lg-offset-2">
            <h4>ABOUT THE PROJECT</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
          </div>
          <div className="col-lg-10 col-lg-offset-1 mt">
            <img className="img-responsive" src="img/pr01.jpg" alt="Project 1" />
            <br />
            <img className="img-responsive" src="img/pr02.jpg" alt="Project 2" />
          </div>
        </div>
      </div>

      <div id="social">
        <div className="container">
          <div className="row centered">
            <div className="col-lg-2">
              <a href="#"><i className="fa fa-dribbble"></i></a>
            </div>
            <div className="col-lg-2">
              <a href="#"><i className="fa fa-facebook"></i></a>
            </div>
            <div className="col-lg-2">
              <a href="#"><i className="fa fa-twitter"></i></a>
            </div>
            <div className="col-lg-2">
              <a href="#"><i className="fa fa-linkedin"></i></a>
            </div>
            <div className="col-lg-2">
              <a href="#"><i className="fa fa-instagram"></i></a>
            </div>
            <div className="col-lg-2">
              <a href="#"><i className="fa fa-tumblr"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div id="copyrights">
        <div className="container">
          <p>&copy; Copyrights <strong>Instant</strong>. All Rights Reserved</p>
          <div className="credits">
            Created with Instant template by <a href="https://templatemag.com/">TemplateMag</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
