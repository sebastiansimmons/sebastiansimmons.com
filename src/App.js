import React from 'react';
import './App.css';

import './css/styles.css';



function App() {

  return (
    <div className="App">
    <body id="page-top">
        {/*  Navigation-- */}
        <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
            <div class="container">
                <a class="navbar-brand js-scroll-trigger" href="#page-top">Sebastian Simmons' Website</a>
                <button class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#portfolio">Portfolio</a></li>
                        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">About</a></li>
                        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        {/*  Masthead-- */}
        <header class="masthead bg-primary text-white text-center">
            <div class="container d-flex align-items-center flex-column">
                {/*  Masthead Avatar Image-- */}
                <img class="masthead-avatar mb-5" src={require('./assets/img/avataaars.svg')} alt="" />
                {/*  Masthead Heading-- */}
                <h1 class="masthead-heading text-uppercase mb-0">Sebastian Simmons</h1>
                {/*  Icon Divider-- */}
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                {/*  Masthead Subheading-- */}
                <p class="masthead-subheading font-weight-light mb-0">Backend Engineer - Serverless Backend - REST APIs</p>
                <p class="masthead-subheading font-weight-light mb-0">This website is a work in progress. I have continious deployment setup through github and netlify so I can push changes as I go.</p>
            </div>
        </header>
        {/*  Portfolio Section-- */}
        <section class="page-section portfolio" id="portfolio">
            <div class="container">
                {/*  Portfolio Section Heading-- */}
                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Project Blog<br/>(Coming Soon)</h2>
                {/*  Icon Divider-- */}
                <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                {/*  Portfolio Grid Items-- */}
                <div class="row">
                    {/*  Portfolio Item 1-- */}
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src={require('./assets/img/portfolio/cabin.png')} alt="" />
                        </div>
                    </div>
                    {/*  Portfolio Item 2-- */}
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src={require('./assets/img/portfolio/cake.png')} alt="" />
                        </div>
                    </div>
                    {/*  Portfolio Item 3-- */}
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src={require('./assets/img/portfolio/circus.png')} alt="" />
                        </div>
                    </div>
                    {/*  Portfolio Item 4-- */}
                    <div class="col-md-6 col-lg-4 mb-5 mb-lg-0">
                        <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal4">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src={require('./assets/img/portfolio/game.png')} alt="" />
                        </div>
                    </div>
                    {/*  Portfolio Item 5-- */}
                    <div class="col-md-6 col-lg-4 mb-5 mb-md-0">
                        <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal5">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src={require('./assets/img/portfolio/safe.png')} alt="" />
                        </div>
                    </div>
                    {/*  Portfolio Item 6-- */}
                    <div class="col-md-6 col-lg-4">
                        <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal6">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src={require('./assets/img/portfolio/submarine.png')} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*  About Section-- */}
        <section class="page-section bg-primary text-white mb-0" id="about">
            <div class="container">
                {/*  About Section Heading-- */}
                <h2 class="page-section-heading text-center text-uppercase text-white">About</h2>
                {/*  Icon Divider-- */}
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                {/*  About Section Content-- */}
                <div class="row">
                    <div class="col-lg-4 ml-auto"><p class="lead">I am programmer/sys admin actively doing freelance development while searching for a full-time position.</p></div>
                    <div class="col-lg-4 mr-auto"><p class="lead">I am passionate about all areas of computers and programming but currently specialize in backend and DevOps.</p></div>
                </div>
                {/*  About Section Button-- */}
                <div class="text-center mt-4">
                    <a class="btn btn-xl btn-outline-light" href={require('./assets/2020SebastianSimmonsRESUME.pdf')}>
                        <i class="fas fa-download mr-2"></i>
                        Download My Resume
                    </a>
                </div>
            </div>
        </section>
        {/*  Contact Section-- */}
        <section class="page-section" id="contact">
            <div class="container">
                {/*  Contact Section Heading-- */}
                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
                {/*  Icon Divider-- */}
                <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                {/*  Contact Section Form-- */}
                <div class="row">
                    <div class="col-lg-8 mx-auto">
                        {/*  To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19.-- */}
                        <form id="contactForm" name="sentMessage" netlify>
                            <div class="control-group">
                                <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Name</label>
                                    <input class="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." />
                                    <p class="help-block text-danger"></p>
                                </div>
                            </div>
                            <div class="control-group">
                                <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Email Address</label>
                                    <input class="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                                    <p class="help-block text-danger"></p>
                                </div>
                            </div>
                            <div class="control-group">
                                <div class="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Message</label>
                                    <textarea class="form-control" id="message" rows="5" placeholder="Message" required="required" data-validation-required-message="Please enter a message."></textarea>
                                    <p class="help-block text-danger"></p>
                                </div>
                            </div>
                            <br />
                            <div id="success"></div>
                            <div class="form-group"><button class="btn btn-primary btn-xl" id="sendMessageButton" type="submit">Send</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        {/*  Copyright Section-- */}
        <div class="copyright py-4 text-center text-white">
            <div class="container"><small>Copyright © sebastiansimmons.com 2020</small></div>
        </div>
        {/*  Scroll to Top Button (Only visible on small and extra-small screen sizes)-- */}
        <div class="scroll-to-top d-lg-none position-fixed">
            <a class="js-scroll-trigger d-block text-center text-white rounded" href="#page-top"><i class="fa fa-chevron-up"></i></a>
        </div>


    </body>

    </div>
  );
}

export default App;
