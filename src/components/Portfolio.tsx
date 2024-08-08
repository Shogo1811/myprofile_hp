import React from 'react';

const Portfolio: React.FC = () => (
  <section id="works">
    <div className="container">
      <div className="row centered mt mb">
        <h1>My Portfolio</h1>
        <div className="col-lg-4 col-md-4 col-sm-4 gallery">
          <a href="/works"><img src="img/portfolio/folio01.png" className="img-responsive" alt="portfolio1"/></a>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 gallery">
          <a href="/works"><img src="img/portfolio/folio02.png" className="img-responsive" alt="portfolio2"/></a>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 gallery">
          <a href="/works"><img src="img/portfolio/folio03.png" className="img-responsive" alt="portfolio3"/></a>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 gallery">
          <a href="/works"><img src="img/portfolio/folio04.png" className="img-responsive" alt="portfolio4"/></a>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 gallery">
          <a href="/works"><img src="img/portfolio/folio05.png" className="img-responsive" alt="portfolio5"/></a>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 gallery">
          <a href="/works"><img src="img/portfolio/folio06.png" className="img-responsive" alt="portfolio6"/></a>
        </div>
      </div>
    </div>
  </section>
);

export default Portfolio;
